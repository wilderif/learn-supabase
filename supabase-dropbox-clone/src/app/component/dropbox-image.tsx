'use client';

import { IconButton } from '@material-tailwind/react';
import { getImageUrl } from '@/utils/supabase/storage';
import { FileObject } from '@supabase/storage-js';

export default function DropboxImage({ file }: { file: FileObject }) {
  return (
    <div className="relative flex w-full flex-col gap-2 rounded-2xl border border-gray-100 p-4 shadow-md">
      <div>
        <img
          src={getImageUrl(file.name)}
          alt="dropbox-icon"
          className="aspect-square w-full rounded-2xl"
        />
      </div>
      <div>{file.name}</div>

      <div className="absolute right-4 top-4">
        <IconButton onClick={() => {}} color="red">
          <i className="fa-solid fa-trash"></i>
        </IconButton>
      </div>
    </div>
  );
}
