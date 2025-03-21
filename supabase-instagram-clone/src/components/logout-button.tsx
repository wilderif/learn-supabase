'use client';

import { createBrowserSupabaseClient } from '@/utils/supabase/client';
import { Button } from '@material-tailwind/react';

export default function LogoutButton() {
  const supabase = createBrowserSupabaseClient();

  return (
    <Button
      onClick={() => {
        supabase.auth.signOut();
      }}
      className="bg-red-500 text-white"
    >
      로그아웃
    </Button>
  );
}
