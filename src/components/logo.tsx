'use client';

import { Utensils } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Logo() {
  const router = useRouter();

  const handleReturnHome = () => {
    return router.push('/');
  };
  return (
    <div>
      <button
        onClick={handleReturnHome}
        className=" cursor-pointer flex h-10 items-center justify-center gap-2 self-center"
      >
        <Utensils className="text-amber-600"></Utensils>

        <h1 className="text-2xl font-bold">
          Leftover <span className="text-amber-600">Magic</span>
        </h1>
      </button>
    </div>
  );
}
