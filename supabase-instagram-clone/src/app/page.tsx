import LogoutButton from '@/components/logout-button';

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-bold">Welcome {'username'}</h2>
      <LogoutButton />
    </div>
  );
}
