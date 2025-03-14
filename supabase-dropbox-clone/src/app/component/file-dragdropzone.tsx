'use client';

import { useRef } from 'react';
import { Button } from '@material-tailwind/react';
import { uploadFile } from '@/actions/storageActions';

export default function FileDragDropZone() {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="flex w-full flex-col items-center justify-center border-4 border-dotted border-indigo-700 py-20"
      onSubmit={async (e) => {
        e.preventDefault();
        const file = fileRef.current?.files?.[0];
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          const result = await uploadFile(formData);
          console.log(result);
        }
      }}
    >
      <input ref={fileRef} type="file" className="" />
      <p>파일을 여기에 끌어다 놓거나 클릭하여 업로드하세요</p>
      <Button type="submit">파일 업로드</Button>
    </form>
  );
}
