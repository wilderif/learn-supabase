'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button, Input } from '@material-tailwind/react';
import { useMutation } from '@tanstack/react-query';
import { createBrowserSupabaseClient } from '@/utils/supabase/client';

export default function SignIn({
  setView,
}: {
  setView: (view: 'SIGNIN' | 'SIGNUP') => void;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const supabase = createBrowserSupabaseClient();

  const signinMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert(error.message);
      }

      // return data;
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full max-w-lg flex-col items-center justify-center gap-2 border border-gray-400 bg-white px-10 pb-6 pt-10">
        <Image
          src="/images/inflearngram_logo.png"
          alt="logo"
          width={240}
          height={0}
          className="mb-6"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="email"
          type="email"
          className="w-full rounded-sm"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="password"
          type="password"
          className="w-full rounded-sm"
        />
        <Button
          onClick={() => signinMutation.mutate()}
          loading={signinMutation.isPending}
          disabled={signinMutation.isPending}
          className="w-full bg-light-blue-600 py-1 text-base"
        >
          로그인
        </Button>
      </div>

      <div className="w-full max-w-lg border border-gray-400 bg-white py-4 text-center">
        계정이 없으신가요?
        <Button
          onClick={() => setView('SIGNUP')}
          className="bg-transparent text-base font-bold text-light-blue-600 shadow-none hover:shadow-none"
        >
          가입하기
        </Button>
      </div>
    </div>
  );
}
