'use client';

import { useFood } from '@/components/food-provider';
import clsx from 'clsx';
import { useWidth } from '../lib/useWidth';
import { BREAK_POINTS, RecipesList } from '../ui/Recipe/recipe-list';
import SearchCard from './components/search-card';

export default function Page() {
  const { recipes, hasSearched } = useFood();
  const widthWindow = useWidth();

  const isDesktop = widthWindow > BREAK_POINTS;
  return (
    <div
      className={clsx(
        "flex h-[calc(100vh-var(--header-height))] flex-col items-center bg-[url('/food.jpg')] bg-cover bg-center bg-no-repeat",
        {
          'overflow-hidden': isDesktop,
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
