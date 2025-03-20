import { getMovie } from '@/actions/movie-actions';
import MoviesUI from './ui';

export default async function Movies({ params }: { params: { id: string } }) {
  const movie = await getMovie(Number(params.id));

  return (
    <main className="absolute bottom-0 left-0 right-0 top-0 flex w-full items-center bg-gray-100 py-16">
      {movie ? <MoviesUI movie={movie} /> : <div>Movie not found</div>}
    </main>
  );
}
