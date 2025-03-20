'use client';

import Logo from '@/components/logo';

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 flex items-center justify-between bg-gray-900 px-4 py-2">
      <nav className="flex gap-4">
        <Logo />
        <ul className="flex gap-2 text-white">
          <li>Movies</li>
          <li>Dramas</li>
        </ul>
      </nav>

      <div className="flex w-full max-w-60 items-center gap-2 rounded-md border border-white bg-transparent p-2 text-white">
        <i className="fas fa-search" />
        <input
          className="bg-transparent"
          type="text"
          placeholder="Search Movies"
        />
      </div>
    </header>
  );
}
