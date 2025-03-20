'use client';

import MovieCard from '@/components/movie-card';
import { useQuery } from '@tanstack/react-query';
import { getAllMovies } from '@/actions/movie-actions';
import { Spinner } from '@material-tailwind/react';

export default function MovieCardList() {
  const getAllMoviesQuery = useQuery({
    queryKey: ['movie'],
    queryFn: () => getAllMovies(),
  });

  return (
    <div className="grid h-full w-full grid-cols-3 gap-1 md:grid-cols-4">
      {getAllMoviesQuery.isLoading && <Spinner />}
      {getAllMoviesQuery.data &&
        getAllMoviesQuery.data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
}
