'use client';

import { useState } from 'react';
import { Checkbox, IconButton, Spinner } from '@material-tailwind/react';
import { TodoRow } from '@/types/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo, deleteTodo } from '@/actions/todo-actions';

export default function Todo({ todo }: { todo: TodoRow }) {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(todo.completed);
  const [title, setTitle] = useState(todo.title);

  const queryClient = useQueryClient();

  const updateTodoMutation = useMutation({
    mutationFn: () =>
      updateTodo({
        id: todo.id,
        title: title,
        completed: completed,
      }),

    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: () => deleteTodo(todo.id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <div className="flex w-full items-center gap-1">
      <Checkbox
        checked={completed}
        onChange={(e) => {
          setCompleted(e.target.checked);
          updateTodoMutation.mutate();
        }}
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
        <IconButton
          onClick={() => {
            setIsEditing(false);
            updateTodoMutation.mutate();
          }}
        >
          {updateTodoMutation.isPending ? (
            <Spinner />
          ) : (
            <i className="fas fa-check" />
          )}
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            setIsEditing(true);
          }}
        >
          <i className="fas fa-pen" />
        </IconButton>
      )}

      <IconButton
        onClick={() => {
          deleteTodoMutation.mutate();
        }}
      >
        {deleteTodoMutation.isPending ? (
          <Spinner />
        ) : (
          <i className="fas fa-trash" />
        )}
      </IconButton>
    </div>
  );
}
