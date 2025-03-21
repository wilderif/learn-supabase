import LogoutButton from '@/components/logout-button';
import { createServerSupabaseClient } from '@/utils/supabase/server';

export default async function Home() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-bold">
        Welcome {session?.user?.email?.split('@')[0]}
      </h2>
      <LogoutButton />
    </div>
  );
}
