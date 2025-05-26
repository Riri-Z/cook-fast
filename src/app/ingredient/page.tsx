'use client';

import { useFood } from '@/components/food-provider';
import clsx from 'clsx';
import { useWidth } from '../lib/useWidth';
import { BREAK_POINTS, RecipesList } from '../ui/Recipe/recipe-list';
import SearchCard from './components/search-card';

export default function Page() {
  const { recipes, hasSearched } = useFood();
  const widthWindow = useWidth();
  return (
    <div
      className={clsx(
        "flex h-screen flex-col items-center overflow-auto bg-[url('/food.jpg')] bg-cover p-4 md:p-0",
        {
          'overflow-hidden': widthWindow > BREAK_POINTS,
        }
      )}
    >
      <main className="flex w-full max-w-[600px] flex-col items-center">
        <SearchCard />
        {hasSearched && <RecipesList recipes={recipes} />}
      </main>
    </div>
  );
}
