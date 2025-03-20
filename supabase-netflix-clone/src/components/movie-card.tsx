'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Database } from '@/types_db';

export default function MovieCard({
  movie,
}: {
  movie: Database['public']['Tables']['movie']['Row'];
}) {
  return (
    <div className="relative col-span-1">
      <Image
        src={movie.image_url}
        alt={movie.title}
        width={0}
        height={0}
        sizes="33vw"
        className="h-auto w-full"
      />

      <Link href={`/movies/${movie.id}`}>
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-black p-4 opacity-0 transition-opacity duration-300 hover:opacity-90">
          <h2 className="text-xl font-bold text-white">{movie.title}</h2>
        </div>
      </Link>
    </div>
  );
}
