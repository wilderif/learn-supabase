'use client';

import MovieCard from '@/components/movie-card';

export default function MovieCardList() {
  return (
    <div className="grid h-full w-full grid-cols-3 gap-1 gap-4 md:grid-cols-4">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}
