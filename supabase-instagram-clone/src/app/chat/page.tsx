import ChatPeopleList from '@/components/chat/chat-people-list';
import ChatScreen from '@/components/chat/chat-screen';
import { createServerSupabaseClient } from '@/utils/supabase/server';

export default async function ChatPage() {
  const supabase = await createServerSupabaseClient();

  const { data } = await supabase.auth.getSession();
  const session = data.session;

  return (
    <div className="h-screnn flex w-full items-center justify-center">
      <ChatPeopleList loggedInUser={session!.user} />
      <ChatScreen />
    </div>
  );
}
