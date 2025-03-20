'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Link href="/">
        <Image
          src="/images/tmdbflix_logo.png"
          alt="TMDbFlix logo"
          width={50}
          height={30}
          className="!h-auto !w-20"
        />
      </Link>
    </div>
  );
}
