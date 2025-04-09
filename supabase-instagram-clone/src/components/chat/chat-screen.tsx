'use client';

import { Button } from '@material-tailwind/react';
import Message from './message';
import Person from './person';
import { useRecoilValue } from 'recoil';
import {
  selectedUserIdState,
  selectedUserIndexState,
} from '@/utils/recoil/atoms';
import {
  getAllMessages,
  sendMessage,
  getUserById,
} from '@/actions/chat-actions';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function ChatScreen() {
  const selectedUserId = useRecoilValue(selectedUserIdState);
  const selectedUserIndex = useRecoilValue(selectedUserIndexState);
  const [message, setMessage] = useState('');

  const getUserByIdQuery = useQuery({
    queryKey: ['user', selectedUserId],
    queryFn: () => getUserById(selectedUserId),
  });

  const sendMessageMutation = useMutation({
    mutationFn: () => sendMessage(selectedUserId, message),
    onSuccess: () => {
      setMessage('');
      getAllMessagesQuery.refetch();
    },
  });

  const getAllMessagesQuery = useQuery({
    queryKey: ['messages', selectedUserId],
    queryFn: () => getAllMessages(selectedUserId),
  });

  return (
    <div className="flex h-screen w-full flex-col">
      {/* Actice 유저 */}
      <Person
        userIndex={selectedUserIndex}
        userId={selectedUserId}
        userName={getUserByIdQuery.data?.email?.split('@')[0]! || 'dummy-user'}
        onlineAt="2025-04-09T12:00:00.000Z"
        isActive={false}
        onChatScreen={true}
        onClick={() => {}}
      />

      {/* 대화 내용 */}
      <div className="flex w-full flex-1 flex-col gap-2 overflow-y-scroll px-4 py-2">
        {getAllMessagesQuery.data?.map((message) => (
          <Message
            key={message.id}
            isFromMe={message.receiver === selectedUserId}
            message={message.message}
          />
        ))}
      </div>

      {/* 대화 입력 */}
      <div className="flex">
        <input
          type="text"
          placeholder="메시지를 입력하세요"
          className="w-full flex-1 rounded-md border-2 border-light-blue-600 px-2 py-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          color="light-blue"
          className="min-w-20"
          onClick={() => sendMessageMutation.mutate()}
          disabled={sendMessageMutation.isPending}
        >
          {sendMessageMutation.isPending ? '전송중...' : '전송'}
        </Button>
      </div>
    </div>
  );
}
