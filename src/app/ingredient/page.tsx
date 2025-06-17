'use client';

import { useFood } from '@/components/food-provider';
import clsx from 'clsx';
import { useWidth } from '../lib/useWidth';
import { BREAK_POINTS, RecipesList } from '../ui/Recipe/recipe-list';
import SearchCard from './components/search-card';

export default function Page() {
  const { recipes, hasSearched, error } = useFood();
  const widthWindow = useWidth();

  const isDesktop = widthWindow >= BREAK_POINTS;

  return (
    <div
      className={clsx(
        "flex h-[calc(100vh-var(--header-height))] flex-col items-center bg-[url('/food.jpg')] bg-cover bg-center bg-no-repeat",
        {
          'overflow-hidden': isDesktop,
          'h-fit': !isDesktop && recipes.length > 5,
        }
      )}
    >
      <main className="flex w-full flex-col items-center gap-4 align-middle sm:max-w-[580px]">
        <SearchCard />
        {error && (
          <p className="w-fit text-2xl font-bold text-red-600">
            Oops something went wrong, try again later :)
          </p>
        )}

        {hasSearched && <RecipesList recipes={recipes} />}
      </main>
    </div>
  );
}
