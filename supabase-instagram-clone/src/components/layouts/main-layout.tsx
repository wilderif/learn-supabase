import SideBar from '../side-bar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-ful flex h-screen items-center justify-center">
      <SideBar />
      {children}
    </main>
  );
}
