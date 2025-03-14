'use client';

import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image
        src="/images/dropbox_icon.png"
        alt="dropbox logo"
        width={50}
        height={30}
        className="!h-8 !w-auto"
      />
      <span className="text-xl font-bold">Minibox</span>
    </div>
  );
}
