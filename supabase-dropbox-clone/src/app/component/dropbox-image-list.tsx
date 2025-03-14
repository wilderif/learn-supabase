'use client';

import { useQuery } from '@tanstack/react-query';
import { searchFiles } from '@/actions/storageActions';
import DropboxImage from './dropbox-image';
import { Spinner } from '@material-tailwind/react';

export default function DropboxImageList({
  searchInput,
}: {
  searchInput: string;
}) {
  const searchImageQuery = useQuery({
    queryKey: ['searchImage', searchInput],
    queryFn: () => searchFiles(searchInput),
  });

  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {searchImageQuery.isLoading && <Spinner />}

      {searchImageQuery.data &&
        searchImageQuery.data.map((file) => (
          <DropboxImage key={file.id} file={file} />
        ))}
    </section>
  );
}
