'use server';

import {
  createServerSupabaseAdminClient,
  createServerSupabaseClient,
} from '@/utils/supabase/server';

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

export async function sendMessage(userId: string, message: string) {
  const supabase = await createServerSupabaseClient();

  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError || !session?.user) {
    throw new Error('User is not authorized');
  }

  const { data, error: sendMessageError } = await supabase
    .from('message')
    .insert({
      message,
      sender: session.user.id,
      receiver: userId,
    });

  if (sendMessageError) {
    throw new Error(sendMessageError.message);
  }

  return data;
}

export async function getAllMessages(userId: string) {}
