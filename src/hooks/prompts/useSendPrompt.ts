// src/hooks/useSendPrompt.ts
'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import type { PromptDataType } from '@/models/Chat.model';
import { EMOJI_LEVELS } from '@/models/Chat.model';

/**
 * Response shape returned by /api/send-prompt
 */
type SendResult = {
  content: string; // assistant Markdown
  id?: string;
  model?: string;
};

export function useSendPrompt() {
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState<string | null>(null);
  const [result, setResult] = useState<SendResult | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  /**
   * Build a single structured prompt from PromptDataType.
   * Only attaches sections that have values.
   */
  const buildPrompt = useCallback((v: PromptDataType) => {
    const lines: string[] = [];

    // Base instruction to keep outputs consistent and easy to render
    lines.push(
      'You are ContentFix, an AI that rewrites text for selected platforms.',
      'Return only Markdown. For each selected platform, create a concise post.',
      'Start each section with "### <Platform>". Then put the post on the next line.',
      'Respect platform norms: LinkedIn (professional), Twitter/X (≤280 chars), Threads (casual), Official (formal memo/email style).'
    );

    // Message (required by schema)
    if (v.message?.trim()) {
      lines.push('', '### User Idea', v.message.trim());
    }

    // Platforms (derive from booleans in the model)
    const platforms: string[] = [];
    if (v.linkedin) platforms.push('LinkedIn');
    if (v.twitter) platforms.push('Twitter/X');
    if (v.threads) platforms.push('Threads');
    if (v.official) platforms.push('Official');
    if (platforms.length) {
      lines.push('', '### Platforms', platforms.join(', '));
    }

    // Tones (optional array; if present, include)
    if (Array.isArray(v.tones) && v.tones.length > 0) {
      // If you want to cap at 2, uncomment: const tones = v.tones.slice(0, 2);
      const tones = v.tones;
      lines.push('', '### Tones', tones.join(', '));
    }

    // Emoji level (optional; validate via EMOJI_LEVELS)
    if (
      v.emojiLevel &&
      (EMOJI_LEVELS as readonly string[]).includes(v.emojiLevel)
    ) {
      const rule =
        v.emojiLevel === 'none'
          ? 'No emojis.'
          : v.emojiLevel === 'low'
          ? 'Few emojis, only when helpful.'
          : 'Some emojis allowed, stay tasteful.';
      lines.push('', '### Emoji Policy', rule);
    }

    // Output rules
    lines.push(
      '',
      '### Output Rules',
      '- Start each section with: "### <Platform>".',
      '- Do not include code fences.',
      '- Return only the posts in Markdown.'
    );

    return lines.join('\n');
  }, []);

  /**
   * Send the assembled prompt to the server route that calls DeepSeek.
   * NOTE: API key stays server-side in /api/send-prompt (uses DEEPSEEKR1_APIKEY).
   */
  const sendPrompt = useCallback(
    async (values: PromptDataType) => {
      // Basic guard: message is required by schema, but double-check here.
      if (!values.message?.trim()) {
        setFailed('Message cannot be empty.');
        setResult(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      setFailed(null);
      setResult(null);

      // Abort any in-flight request
      abortRef.current?.abort();
      abortRef.current = new AbortController();

      try {
        const prompt = buildPrompt(values);

        const res = await fetch('/api/send-prompt', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt }),
          signal: abortRef.current.signal,
        });

        if (!res.ok) {
          const text = await res.text().catch(() => '');
          throw new Error(text || `Request failed: ${res.status}`);
        }

        const data = (await res.json()) as SendResult;
        setResult({ content: data.content, id: data.id, model: data.model });
      } catch (err: any) {
        if (err?.name === 'AbortError') return; // quietly ignore
        setFailed(err?.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    },
    [buildPrompt]
  );

  const reset = useCallback(() => {
    setLoading(false);
    setFailed(null);
    setResult(null);
    abortRef.current?.abort();
  }, []);

  return useMemo(
    () => ({ sendPrompt, loading, failed, result, reset }),
    [sendPrompt, loading, failed, result, reset]
  );
}
