'use client';

import { useState } from 'react';

import Logo from './component/logo';
import SearchComponent from './component/search-component';
import FileDragDropZone from './component/file-dragdropzone';
import DropboxImageList from './component/dropbox-image-list';
export default function UI() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <main className="flex w-full flex-col gap-4 p-2">
      {/* logo */}
      <Logo />

      {/* search component */}
      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      {/* file drag and drop zone */}
      <FileDragDropZone />

      {/* images list */}
      <DropboxImageList />
    </main>
  );
}
