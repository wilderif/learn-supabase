'use client';

import MovieCard from '@/components/movie-card';
import { useQuery } from '@tanstack/react-query';
import { getMovies } from '@/actions/movie-actions';
import { Spinner } from '@material-tailwind/react';
import { searchState } from '@/utils/recoil/atoms';
import { useRecoilValue } from 'recoil';

export default function MovieCardList() {
  const search = useRecoilValue(searchState);
  const getAllMoviesQuery = useQuery({
    queryKey: ['movie', search],
    queryFn: () => getMovies(search),
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
