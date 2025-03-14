'use server';

import { createServerSupabaseClient } from '@/utils/supabase/server';

function handleError(error: Error | null) {
  if (error) {
    console.error(error);
    throw error;
  }
}

export async function uploadFile(formData: FormData) {
  const supabase = await createServerSupabaseClient();
  const file = formData.get('file') as File;

  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET!)
    .upload(file.name, file, { upsert: true }); // upsert: true 는 파일이 이미 존재하면 덮어쓰기 하는 옵션

  handleError(error);

  return data;
}

export async function searchFile(search: string = '') {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET!)
    .list(undefined, { search });

  handleError(error);

  return data;
}
