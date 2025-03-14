'use client';

import { useCallback, useRef } from 'react';
import { uploadFile } from '@/actions/storageActions';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDropzone } from 'react-dropzone';
import { Spinner } from '@material-tailwind/react';

export default function FileDragDropZone() {
  const fileRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['searchImage'] });
    },
  });

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append('file', file);
    });

    uploadImageMutation.mutate(formData);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className="flex w-full cursor-pointer flex-col items-center justify-center border-4 border-dotted border-indigo-700 py-20"
      // onSubmit={async (e) => {
      //   e.preventDefault();
      //   const file = fileRef.current?.files?.[0];
      //   if (file) {
      //     const formData = new FormData();
      //     formData.append('file', file);
      //     uploadImageMutation.mutate(formData);
      //   }
      // }}
    >
      <input {...getInputProps()} />

      {uploadImageMutation.isPending ? (
        <Spinner />
      ) : isDragActive ? (
        <p>파일을 놓아주세요</p>
      ) : (
        <p>파일을 여기에 끌어다 놓거나 클릭하여 업로드하세요</p>
      )}
    </div>
  );
}
