'use client';

import Person from './person';
import { useRecoilState } from 'recoil';
import {
  selectedUserIdState,
  selectedUserIndexState,
  presenceState,
} from '@/utils/recoil/atoms';
import { getAllUsers } from '@/actions/chat-actions';
import { useQuery } from '@tanstack/react-query';
import { User } from '@supabase/supabase-js';
import { createBrowserSupabaseClient } from '@/utils/supabase/client';
import { useEffect } from 'react';

export default function ChatPeopleList({
  loggedInUser,
}: {
  loggedInUser: User;
}) {
  const [selectedUserId, setSelectedUserId] =
    useRecoilState(selectedUserIdState);
  const [selectedUserIndex, setSelectedUserIndex] = useRecoilState(
    selectedUserIndexState,
  );
  const [presence, setPresence] = useRecoilState(presenceState);

  const getAllUsersQuery = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const allUsers = await getAllUsers();

      // Id 하나로 테스트하기 위해 주석처리
      // return allUsers.filter((user) => user.id !== loggedInUser?.id);

      return allUsers.filter((user) => user.id === loggedInUser?.id);
    },
  });

  const supabase = createBrowserSupabaseClient();
  useEffect(() => {
    const channel = supabase.channel('online_users', {
      config: {
        presence: {
          key: loggedInUser.id,
        },
      },
    });

    channel
      .on('presence', { event: 'sync' }, () => {
        const newState = channel.presenceState();
        const newStateObject = JSON.parse(JSON.stringify(newState));
        setPresence(newStateObject);
      })
      .subscribe(async (status) => {
        if (status !== 'SUBSCRIBED') {
          return;
        }

        await channel.track({
          onlineAt: new Date().toISOString(),
        });
      });

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return (
    <div className="flex h-screen min-w-60 flex-col bg-gray-50">
      {getAllUsersQuery.data?.map((user, index) => (
        <Person
          key={user.id}
          userIndex={index}
          userId={user.id}
          userName={user.email?.split('@')[0]!}
          onlineAt={presence?.[user.id]?.[0]?.onlineAt || null}
          isActive={user.id === selectedUserId}
          onChatScreen={false}
          onClick={() => {
            setSelectedUserId(user.id);
            setSelectedUserIndex(index);
          }}
        />
      ))}
      <Person
        userIndex={getAllUsersQuery.data?.length ?? 0}
        userId="dummy-user-id"
        userName="Dummy User"
        onlineAt="2021-01-01"
        isActive={selectedUserId === 'dummy-user-id'}
        onChatScreen={false}
        onClick={() => {
          setSelectedUserId('dummy-user-id');
          setSelectedUserIndex(getAllUsersQuery.data?.length ?? 0);
        }}
      />
    </div>
  );
}
