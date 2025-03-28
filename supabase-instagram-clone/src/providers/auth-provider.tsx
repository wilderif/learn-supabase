'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { createBrowserSupabaseClient } from '@/utils/supabase/client';

export default function AuthProvider({
  accessToken,
  children,
}: {
  accessToken: string;
  children: React.ReactNode;
}) {
  const supabase = createBrowserSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh();
      }
    });

    return () => {
      authListener.unsubscribe();
    };
  }, [accessToken, supabase, router]);

  return <>{children}</>;
}
