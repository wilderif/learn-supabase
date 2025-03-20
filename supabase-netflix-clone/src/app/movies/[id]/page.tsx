import MoviesUI from './ui';

export default function Movies({ params }: { params: { id: string } }) {
  return (
    <main className="absolute bottom-0 left-0 right-0 top-0 flex w-full items-center bg-blue-50 py-16">
      <MoviesUI id={params.id} />
    </main>
  );
}
