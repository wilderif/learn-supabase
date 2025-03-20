'use server';

import { createServerSupabaseClient } from '@/utils/supabase/server';
import { handleError } from '@/utils/handle-error';

export async function getMovies({
  search,
  page,
  pageSize,
}: {
  search: string;
  page: number;
  pageSize: number;
}) {
  const supabase = await createServerSupabaseClient();

  const { data, count, error } = await supabase
    .from('movie')
    .select('*', { count: 'exact' })
    .ilike('title', `%${search}%`)
    .range((page - 1) * pageSize, page * pageSize - 1);

  if (error) {
    handleError(error);
  }

  const hasNextPage = count! > page * pageSize;

  return { data, page, pageSize, hasNextPage };
}

export async function getMovie(id: number) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from('movie')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    handleError(error);
  }

  return data;
}
