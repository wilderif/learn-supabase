'use server';

import { createServerSupabaseClient } from '@/utils/supabase/server';
import { handleError } from '@/utils/handle-error';

export async function getAllMovies() {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.from('movie').select('*');

  if (error) {
    handleError(error);
  }

  return data;
}
