import Image from 'next/image';

export default function MoviesUI({ id }: { id: string }) {
  return (
    <div className="flex w-full flex-col items-center md:flex-row">
      <Image
        src="/images/tmdbflix_logo.png"
        alt="TMDbFlix logo"
        width={0}
        height={0}
        sizes="33vw"
        className="w-full md:w-1/3"
      />

      <div className="flex w-full flex-col items-center gap-4 p-6 md:w-2/3 md:items-start">
        <h2 className="text-3xl font-bold">Movie Title</h2>
        <p className="text-lg font-medium">Movie Description</p>
        <div className="text-lg font-bold">
          <i className="fas fa-star mr-1"></i>
          Vote Average: 7.5
        </div>
        <div className="text-lg font-bold">Popularity: 100</div>
        <div className="text-lg font-bold">Release Date: 2024-01-01</div>
      </div>
    </div>
  );
}
