'use client';

import { IconButton, Spinner } from '@material-tailwind/react';
import { getImageUrl } from '@/utils/supabase/storage';
import { FileObject } from '@supabase/storage-js';
import { deleteFile } from '@/actions/storageActions';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function DropboxImage({ file }: { file: FileObject }) {
  const queryClient = useQueryClient();
  const deleteImageMutation = useMutation({
    mutationFn: deleteFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['searchImage'] });
    },
  });

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
        <IconButton
          onClick={() => deleteImageMutation.mutate(file.name)}
          color="red"
        >
          {deleteImageMutation.isPending ? (
            <Spinner />
          ) : (
            <i className="fa-solid fa-trash"></i>
          )}
        </IconButton>
      </div>
    </div>
  );
}
