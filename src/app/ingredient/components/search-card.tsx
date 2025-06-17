import clsx from 'clsx';
import { AddIngredient } from './add-ingredient';
import FetchRecipes from './fetch-recipes';
import { useWidth } from '@/app/lib/useWidth';

export default function SearchCard() {
  const widthWindow = useWidth();

  return (
    <div
      className={clsx(
        'bg-base-100 z-50 m-2 flex h-fit w-full flex-col gap-4 p-2 shadow-2xl md:m-4 md:mb-0 md:rounded-2xl md:p-6',
        {
          'sticky top-[var(--header-height)]': widthWindow < 600,
        }
      )}
    >
      <h1 className="text-4xl font-bold">My Pantry</h1>
      <p className="">
        Add ingredients you already have and we&#39;ll find recipes that match.
      </p>
      <AddIngredient />
      <FetchRecipes />
    </div>
  );
}
