'use client';

import { IconButton } from '@material-tailwind/react';

export default function DropboxImage() {
  return (
    <div className="relative flex w-full flex-col gap-2 rounded-2xl border border-gray-100 p-4 shadow-md">
      <div>
        <img
          src="/images/dropbox_icon.png"
          alt="dropbox-icon"
          className="aspect-square w-full rounded-2xl"
        />
      </div>
      <div>File Name</div>

      <div className="absolute right-4 top-4">
        <IconButton onClick={() => {}} color="red">
          <i className="fa-solid fa-trash"></i>
        </IconButton>
      </div>
    </div>
  );
}
