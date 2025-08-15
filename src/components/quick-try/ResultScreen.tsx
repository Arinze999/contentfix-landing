'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSendPromptContext } from '@/context/SendPromptContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ResultSkeleton from '../loaders/ResultSkeleton';
import { gsap } from '@/lib/gsapClient';
import { CopyOutline } from '../icons/CopyOutline';

const ResultScreen = () => {
  const { loading, result, failed } = useSendPromptContext();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<number | null>(null);

  const handleCopy = async () => {
    const text = result?.content ?? '';
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = window.setTimeout(() => setCopied(false), 4000);
    } catch {
      // simple fallback if clipboard API fails
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = window.setTimeout(() => setCopied(false), 4000);
    }
  };

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  // Run typing animation after content mounts
  useEffect(() => {
    if (loading) return;
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const blocks = el.querySelectorAll('h1, h2, h3, p, li');
      const tl = gsap.timeline({ defaults: { ease: 'none' } });

      blocks.forEach((node) => {
        const full = node.textContent ?? '';
        if (!full.trim()) return;
        gsap.set(node, { opacity: 1 });
        tl.fromTo(
          node,
          { text: '' as any },
          {
            text: full as any,
            duration: Math.min(2.2, Math.max(0.6, full.length / 35)),
          },
          '+=0.05'
        );
      });
    }, el);

    return () => {
      ctx.revert();
    }; // returns void
  }, [loading, result?.id]);

  return (
    <div className="min-h-[10rem] text-sm rounded-lg md:mt-[7rem] mt-[5rem] flow-root h-auto text-white">
      {loading ? (
        <ResultSkeleton />
      ) : failed ? (
        <p className="text-red-600">
          failed, Please retry shortly Deepseek servers are currently busy...
        </p>
      ) : (
        <div
          ref={containerRef}
          className="block w-full break-words whitespace-pre-wrap leading-relaxed"
        >
          {result?.content && (
            <div className="fixed top-30 right-5 md:right-30 z-5 -mt-2 mb-2 flex justify-end">
              <button
                type="button"
                onClick={handleCopy}
                disabled={!result?.content}
                className="rounded-md border border-white/20 px-3 hover:text-purple-500 py-1 text-xs md:text-sm shadow-sm hover:bg-white/10 disabled:opacity-50 flex-center gap-3"
                title="Copy content"
              >
                <CopyOutline /> {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          )}

          <ReactMarkdown
            key={result?.id || result?.content?.length || 0}
            remarkPlugins={[remarkGfm]}
            components={{
              p: (props) => <p className="m-0 opacity-0" {...props} />,
              h1: (props) => (
                <h1
                  className="text-3xl font-extrabold leading-tight mt-6 mb-3 opacity-0"
                  {...props}
                />
              ),
              h2: (props) => (
                <h2
                  className="text-3xl font-extrabold leading-tight mt-6 mb-3 opacity-0"
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  className="text-3xl font-extrabold leading-tight mt-6 mb-3 opacity-0"
                  {...props}
                />
              ),
              li: (props) => <li className="opacity-0" {...props} />,
              hr: () => <hr className="my-6 border-t border-white/20" />,
            }}
          >
            {result?.content || ''}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default ResultScreen;
