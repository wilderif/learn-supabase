import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/material-tailwind-theme-provider';
import ReactQueryClientProvider from '@/providers/react-query-client-provider';
import RecoilProvider from '@/providers/recoil-provider';
import MainLayout from '@/components/layouts/main-layout';
import Auth from '@/components/auth';
import { createServerSupabaseClient } from '@/utils/supabase/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Instagram Clone',
  description: 'Instagram clone with Next.js and Supabase',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <RecoilProvider>
          <ReactQueryClientProvider>
            <ThemeProvider>
              {session?.user ? <MainLayout>{children}</MainLayout> : <Auth />}
            </ThemeProvider>
          </ReactQueryClientProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}
