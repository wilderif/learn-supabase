'use client';

import { Home, People, Search, Send, Logout } from '@mui/icons-material';
import Link from 'next/link';

export default function SideBar() {
  return (
    <aside className="flex h-screen w-fit flex-col justify-between border-r border-gray-300 p-6">
      <div className="flex flex-col gap-4">
        <Link href="/">
          <Home className="mb-10 text-2xl" />
        </Link>

        <Link href="/people">
          <People className="text-2xl" />
        </Link>
        <Link href="/discover">
          <Search className="text-2xl" />
        </Link>
        <Link href="/chat">
          <Send className="text-2xl" />
        </Link>
      </div>

      <div>
        <button onClick={() => {}}>
          <Logout className="text-2xl text-deep-purple-900" />
        </button>
      </div>
    </aside>
  );
}
