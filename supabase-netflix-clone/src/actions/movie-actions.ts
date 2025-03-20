'use server';

import { createServerSupabaseClient } from '@/utils/supabase/server';
import { handleError } from '@/utils/handle-error';

export async function getMovies(search: string) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase
    .from('movie')
    .select('*')
    .ilike('title', `%${search}%`);

  if (error) {
    handleError(error);
  }

  return data;
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
