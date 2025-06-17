'use client';
import { Utensils } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ToggleTheme from './toggle-theme';

export default function Header() {
  const router = useRouter();

  const handleReturnHome = () => {
    return router.push('/');
  };
  return (
    <div className="sticky top-0 right-0 left-0 z-999 flex h-[var(--header-height)] max-w-[100dvw] justify-between bg-green-800 p-4 align-middle backdrop-blur-xs">
      <button
        onClick={handleReturnHome}
        type="button"
        className="flex h-10 cursor-pointer items-center justify-center gap-2 self-center"
      >
        <Utensils className="text-amber-600" />
        <h1 className="flex w-full gap-2 text-2xl font-bold">
          <p className="text-white">Leftover</p>
          <span className="text-amber-600">Magic</span>
        </h1>
      </button>
      <ToggleTheme />
    </div>
  );
}
