'use server';

import { createServerSupabaseAdminClient } from '@/utils/supabase/server';

export async function getAllUsers() {
  const supabase = await createServerSupabaseAdminClient();

  const { data, error } = await supabase.auth.admin.listUsers();

  if (error) {
    console.error(error);
    return [];
  }

  return data.users;
}

export async function getUserById(userId: string) {
  const supabase = await createServerSupabaseAdminClient();

  const { data, error } = await supabase.auth.admin.getUserById(userId);

  if (error) {
    console.error(error);
    return null;
  }

  return data.user;
}
