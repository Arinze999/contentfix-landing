'use client';

import { useState, useCallback } from 'react';
import { useSettings } from '@/context/SettingsContext';

const DASHBOARD_ORIGIN =
  process.env.NEXT_PUBLIC_DASHBOARD_ORIGIN ??
  'https://contentfix-dashboard.vercel.app';

type WhoAmIResponse =
  | {
      ok: true;
      user: {
        id: string;
        email: string | null;
        username: string | null;
        avatar_url?: string | null;
      };
    }
  | { ok: false; user: null };

export function useGetUser() {
  const { setUser } = useSettings();
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${DASHBOARD_ORIGIN}/api/whoami`, {
        method: 'GET',
        credentials: 'include', // send dashboard cookies (if present in THIS browser)
      });

      if (!res.ok) {
        // 401 or other -> treat as guest
        setUser(null);
        return { ok: false as const, user: null };
      }

      const data = (await res.json()) as WhoAmIResponse;

      if (data.ok) {
        setUser({
          id: data.user.id,
          email: data.user.email,
          username: data.user.username,
          avatar_url: data.user.avatar_url ?? null,
        });
      } else {
        setUser(null);
      }

      return data;
    } catch (e: any) {
      // Network / CORS issues -> treat as guest
      console.log(e);
      setUser(null);
      return { ok: false as const, user: null };
    } finally {
      setLoading(false);
    }
  }, [setUser]);

  return { loading, refresh };
}
