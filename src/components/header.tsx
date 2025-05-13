'use client';
import { Utensils } from 'lucide-react';
import ToggleTheme from './toggle-theme';

export default function Header() {
  return (
    <div className="sticky top-0 right-0 left-0 z-999 flex h-20 w-full justify-between px-8 align-middle backdrop-blur-xl">
      <div className="flex h-10 items-center justify-center gap-2 self-center">
        <Utensils className="text-amber-600"></Utensils>

        <h1 className="text-2xl font-bold">
          Leftover <span className="text-amber-600">Magic</span>
        </h1>
      </div>
      <ToggleTheme />
    </div>
  );
}
