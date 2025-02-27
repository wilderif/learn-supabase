'use server';

import { createServerSupabaseClient } from '@/utils/supabase/server';
import { TodoRow, TodoRowInsert, TodoRowUpdate } from '@/types/types';

function handleError(error: Error) {
  console.error(error);
  throw new Error(error.message);
}

export async function getTodos(searchInput = ''): Promise<TodoRow[]> {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from('todo')
    .select('*')
    .like('title', `%${searchInput}%`)
    .order('created_at', { ascending: true });

  if (error) {
    handleError(error);
  }

  return data ?? [];
}

export async function createTodo(todo: TodoRowInsert) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from('todo').insert({
    ...todo,
    created_at: new Date().toISOString(),
  });

  if (error) {
    handleError(error);
  }

  return data;
}

export async function updateTodo(todo: TodoRowUpdate) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from('todo')
    .update({
      ...todo,
      updated_at: new Date().toISOString(),
    })
    .eq('id', todo.id!);

  if (error) {
    handleError(error);
  }

  return data;
}

export async function deleteTodo(id: number) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from('todo').delete().eq('id', id);

  if (error) {
    handleError(error);
  }

  return data;
}
