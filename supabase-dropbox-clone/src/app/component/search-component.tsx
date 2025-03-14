'use client';

import { Input } from '@material-tailwind/react';

export default function SearchComponent({
  searchInput,
  setSearchInput,
}: {
  searchInput: string;
  setSearchInput: (value: string) => void;
}) {
  return (
    <Input
      label="Search Images"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      icon={<i className="fa-solid fa-magnifying-glass" />}
    />
  );
}
