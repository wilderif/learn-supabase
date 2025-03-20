'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function MovieCard() {
  return (
    <div className="relative col-span-1">
      <Image
        src="/images/tmdbflix_logo.png"
        alt="TMDbFlix logo"
        width={50}
        height={50}
        className="!h-auto !w-20"
      />

      {/* id로 변경할 것 */}
      <Link href="/movies/123">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-black opacity-0 transition-opacity duration-300 hover:opacity-90">
          <h3 className="text-xl font-bold text-white">Movie Title</h3>
        </div>
      </Link>
    </div>
  );
}
