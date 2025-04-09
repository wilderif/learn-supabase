'use client';

import { useState } from 'react';
import Person from './person';
import { useRecoilState } from 'recoil';
import { selectedIndexState } from '@/utils/recoil/atoms';

export default function ChatPeopleList() {
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedIndexState);

  return (
    <div className="flex h-screen min-w-60 flex-col bg-gray-50">
      <Person
        userIndex={0}
        userId="1"
        userName="John Doe"
        onlineAt="2025-04-09T12:00:00.000Z"
        isActive={selectedIndex === 0}
        onChatScreen={false}
        onClick={() => setSelectedIndex(0)}
      />
      <Person
        userIndex={1}
        userId="2"
        userName="Jane Doe"
        onlineAt="2025-04-09T12:00:00.000Z"
        isActive={selectedIndex === 1}
        onChatScreen={false}
        onClick={() => setSelectedIndex(1)}
      />
      <Person
        userIndex={2}
        userId="1"
        userName="John Doe"
        onlineAt="2025-04-09T12:00:00.000Z"
        isActive={selectedIndex === 2}
        onChatScreen={false}
        onClick={() => setSelectedIndex(2)}
      />
      <Person
        userIndex={3}
        userId="4"
        userName="Jane Doe"
        onlineAt="2025-04-09T12:00:00.000Z"
        isActive={selectedIndex === 3}
        onChatScreen={false}
        onClick={() => setSelectedIndex(3)}
      />
    </div>
  );
}
