'use client';
import { Button, Input } from '@material-tailwind/react';
import Todo from '@/components/todo';

export default function UI() {
  return (
    <div className="mx-auto flex w-2/3 flex-col items-center gap-2 py-10">
      <h1 className="text-xl">TODO LIST</h1>

      <Input
        label="Search TODO"
        placeholder="Search TODO"
        icon={<i className="fas fa-search" />}
      />

      <Todo />
      <Button>
        <i className="fas fa-plus mr-2" />
        ADD TODO
      </Button>
    </div>
  );
}
