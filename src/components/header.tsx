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
    <div className="sticky bg-transparent top-0 right-0 left-0 z-999 flex h-[var(--header-height)] w-full justify-between px-8 align-middle backdrop-blur-xs">
      <button
        onClick={handleReturnHome}
        type="button"
        className=" cursor-pointer flex h-10 items-center justify-center gap-2 self-center"
      >
        <Utensils className="text-amber-600"></Utensils>

        <h1 className="text-2xl font-bold">
          Leftover <span className="text-amber-600">Magic</span>
        </h1>
      </button>
      <ToggleTheme />
    </div>
  );
}
