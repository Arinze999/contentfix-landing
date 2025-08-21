'use client';

import { useEffect } from 'react';
import { useGetUser } from '@/hooks/useGetUser';

export default function AuthBootstrapper() {
  const { refresh } = useGetUser();

  useEffect(() => {
    refresh(); // run once on mount

    // Optional: keep fresh when tab regains focus / becomes visible
    const onFocus = () => refresh();
    const onVisibility = () => {
      if (document.visibilityState === 'visible') refresh();
    };

    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [refresh]);

  return null; // no UI
}
