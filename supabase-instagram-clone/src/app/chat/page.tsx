import ChatPeopleList from '@/components/chat/chat-people-list';
import ChatScreen from '@/components/chat/chat-screen';

export default function ChatPage() {
  return (
    <div className="h-screnn flex w-full items-center justify-center">
      <ChatPeopleList />
      <ChatScreen />
    </div>
  );
}
