'use client';

import { getRandomImage } from '@/utils/random';
import TimeAgo from 'javascript-time-ago';
import ko from 'javascript-time-ago/locale/ko';

TimeAgo.addLocale(ko);
TimeAgo.setDefaultLocale('ko');

const timeAgo = new TimeAgo('ko-KR');

export default function Person({
  userIndex,
  userId,
  userName,
  onlineAt,
  isActive,
  onChatScreen,
  onClick,
}: {
  userIndex: number;
  userId: string;
  userName: string;
  onlineAt: string;
  isActive: boolean;
  onChatScreen: boolean;
  onClick: () => void;
}) {
  console.log(onlineAt);
  return (
    <div
      className={`flex min-w-60 ${!onChatScreen && 'cursor-pointer'} items-center gap-4 p-4 ${
        !onChatScreen && isActive ? 'bg-light-blue-50' : 'bg-gray-50'
      } ${onChatScreen && 'bg-gray-50'}`}
      onClick={onClick}
    >
      <img
        src={getRandomImage(userIndex)}
        alt={userName}
        className="h-10 w-10 rounded-full"
      />
      <div className="flex-1">
        <p className="text-lg font-bold text-black">{userName}</p>
        <p className="text-sm text-gray-500">
          {onlineAt && timeAgo.format(Date.parse(onlineAt))}
        </p>
      </div>
    </div>
  );
}
