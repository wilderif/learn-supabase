'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button, Input } from '@material-tailwind/react';
import { createBrowserSupabaseClient } from '@/utils/supabase/client';
import { useMutation } from '@tanstack/react-query';

export default function SignUp({
  setView,
}: {
  setView: (view: 'SIGNIN' | 'SIGNUP') => void;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationRequired, setConfirmationRequired] = useState(false);

  const supabase = createBrowserSupabaseClient();

  const signupMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: 'http://localhost:3000/signup/confirm',
        },
      });

      if (error) {
        alert(error.message);
        throw error;
      }

      if (data) {
        setConfirmationRequired(true);
      }
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
          onClick={() => signupMutation.mutate()}
          loading={signupMutation.isPending}
          disabled={confirmationRequired}
          className="w-full bg-light-blue-600 py-1 text-base"
        >
          {confirmationRequired ? '메일함을 확인해주세요' : '가입하기'}
        </Button>
      </div>

      <div className="w-full max-w-lg border border-gray-400 bg-white py-4 text-center">
        이미 계정이 있으신가요?
        <Button
          onClick={() => setView('SIGNIN')}
          className="bg-transparent text-base font-bold text-light-blue-600 shadow-none hover:shadow-none"
        >
          로그인
        </Button>
      </div>
    </div>
  );
}
