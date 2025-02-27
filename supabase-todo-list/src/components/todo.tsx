'use client';

import { useState } from 'react';
import { Checkbox, IconButton } from '@material-tailwind/react';
import { TodoRow } from '@/types/types';

export default function Todo({ todo }: { todo: TodoRow }) {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(todo.completed);
  const [title, setTitle] = useState(todo.title);

  return (
    <div className="flex w-full items-center gap-1">
      <Checkbox
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
      />
      {isEditing ? (
        <input
          className="flex-1 border-b border-b-black pb-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <p className={`flex-1 ${completed && 'line-through'}`}>{title}</p>
      )}

      {isEditing ? (
        <IconButton onClick={() => setIsEditing(false)}>
          <i className="fas fa-check" />
        </IconButton>
      ) : (
        <IconButton onClick={() => setIsEditing(true)}>
          <i className="fas fa-pen" />
        </IconButton>
      )}

      <IconButton>
        <i className="fas fa-trash" />
      </IconButton>
    </div>
  );
}
