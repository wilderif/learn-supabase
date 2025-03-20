import Image from 'next/image';
import { Database } from '@/types_db';

export default function MoviesUI({
  movie,
}: {
  movie: Database['public']['Tables']['movie']['Row'];
}) {
  return (
    <div className="flex w-full flex-col items-center md:flex-row">
      <Image
        src={movie.image_url}
        alt={movie.title}
        width={0}
        height={0}
        sizes="33vw"
        className="w-full md:w-1/3"
      />

      <div className="flex w-full flex-col items-center gap-4 p-6 md:w-2/3 md:items-start">
        <h2 className="text-3xl font-bold">{movie.title}</h2>
        <p className="text-lg font-medium">{movie.overview}</p>
        <div className="text-lg font-bold">
          <i className="fas fa-star mr-1"></i>
          Vote Average: {movie.vote_average}
        </div>
        <div className="text-lg font-bold">Popularity: {movie.popularity}</div>
        <div className="text-lg font-bold">
          Release Date: {movie.release_date}
        </div>
      </div>
    </div>
  );
}
