'use client';

import MovieCard from '@/components/movie-card';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getMovies } from '@/actions/movie-actions';
import { Spinner } from '@material-tailwind/react';
import { searchState } from '@/utils/recoil/atoms';
import { useRecoilValue } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function MovieCardList() {
  const search = useRecoilValue(searchState);
  const {
    data: movies,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movie', search],
    queryFn: ({ pageParam }) =>
      getMovies({ search, page: pageParam, pageSize: 12 }),
    getNextPageParam: (lastPage) =>
      lastPage?.hasNextPage ? lastPage.page + 1 : null,
  });

  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching]);

  return (
    <div className="grid h-full w-full grid-cols-3 gap-1 md:grid-cols-4">
      {(isFetching || isFetchingNextPage) && <Spinner />}
      {movies?.pages.map((page) =>
        page.data
          ?.flat()
          .map((movie) => <MovieCard key={movie.id} movie={movie} />),
      )}
      <div ref={ref} />
    </div>
  );
}
