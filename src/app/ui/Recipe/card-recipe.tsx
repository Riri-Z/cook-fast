'use client';

import { Meal } from '@/app/lib/types';
import { redirect } from 'next/navigation';
import { Button } from '../button';
import TagsRecipe from './tags-recipe';
import { useMemo } from 'react';

export function CardRecipe({ recipe }: Readonly<{ recipe: Meal }>) {
  const {
    recipeDetail,
    userIngredientPresent,
    nbrMissingIngredients,
    ingredients,
    strMealThumb,
    strMeal,
    match,
  } = recipe;
  // Transform string tags to array of tags
  const tags = recipeDetail?.strTags?.split(',') ?? [];
  const formatIngredientsName = useMemo(() => {
    return ingredients?.join(', ').toLowerCase();
  }, [ingredients]);

  const handleRedirectToRecipe = () => {
    return redirect('/recipe/' + recipe.idMeal);
  };

  return (
    <div
      data-testid="card-recipe"
      className="card bg-base-100 w-full cursor-pointer rounded-4xl transition-transform duration-300 ease-out hover:translate-y-[-4px] sm:w-[200px] md:w-[280px]"
    >
      <picture className="relative flex justify-center rounded-4xl sm:h-56">
        <img
          src={strMealThumb}
          alt={strMeal}
          loading="lazy"
          className="aspect-auto rounded-4xl p-2"
        />
      </picture>

      <div className="card-body flex px-4 py-2 shadow-none">
        <section className="flex items-center justify-between gap-2">
          <h1 className="card-title h-fit truncate text-lg font-bold">
            {strMeal}
          </h1>
          {recipeDetail?.strCategory && (
            <div className="badge badge-info">{recipeDetail.strCategory}</div>
          )}
        </section>

        {userIngredientPresent && nbrMissingIngredients && (
          <div className="tooltip" data-tip={formatIngredientsName}>
            <p className="font-semibold">
              {userIngredientPresent?.length} matching ingredient out of{' '}
              {userIngredientPresent.length + nbrMissingIngredients} ({match} %)
            </p>
          </div>
        )}
        <progress
          className="progress progress-warning"
          value={match}
          max="100"
          aria-label={`${match} % matching ingredients`}
        />

        <section className="mb-2 flex flex-col gap-2">
          <h1>🏷️ Tags</h1>
          {tags && <TagsRecipe tags={tags} variant="badge-secondary" />}
        </section>
        <Button
          className="btn-success w-fullself-center mb-2 rounded-4xl sm:h-8"
          onClick={handleRedirectToRecipe}
        >
          <p className="text-white">View full recipe</p>
        </Button>
      </div>
    </div>
  );
}
