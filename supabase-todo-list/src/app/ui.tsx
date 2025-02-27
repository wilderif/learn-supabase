'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTodos } from '@/actions/todo-actions';
import { Button, Input } from '@material-tailwind/react';
import Todo from '@/components/todo';

export default function UI() {
  const [searchInput, setSearchInput] = useState('');

  const todosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos({ searchInput }),
  });

  return (
    <div className="mx-auto flex w-2/3 flex-col items-center gap-2 py-10">
      <h1 className="text-xl">TODO LIST</h1>

      <Input
        label="Search TODO"
        placeholder="Search TODO"
        icon={<i className="fas fa-search" />}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {todosQuery.isPending && <p>Loading...</p>}

      {todosQuery.data &&
        todosQuery.data.map((todo) => <Todo key={todo.id} todo={todo} />)}

      <Button>
        <i className="fas fa-plus mr-2" />
        ADD TODO
      </Button>
    </div>
  );
}
