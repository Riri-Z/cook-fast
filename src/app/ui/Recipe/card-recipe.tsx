'use client';

import { Meal } from '@/app/lib/types';
import { Button } from '../button';
import TagsRecipe from './tags-recipe';

export function CardRecipe({ recipe }: Readonly<{ recipe: Meal }>) {
  const {
    recipeDetail,
    userIngredientPresent,
    nbrMissingIngredients,
    strMealThumb,
    strMeal,
    match,
  } = recipe;

  // Transform string tags to array of tags
  const tags = recipeDetail?.strTags?.split(',') ?? [];

  return (
    <div className="card bg-base-100 w-full rounded-4xl transition-transform duration-300 ease-out hover:translate-y-[-4px] hover:cursor-pointer sm:w-[280px]">
      <picture>
        <img
          src={strMealThumb}
          alt={strMeal}
          className="h-52 w-full rounded-4xl bg-center"
        />
      </picture>

      <div className="card-body flex p-4 shadow-none">
        <section className="flex items-center gap-2 align-middle">
          <h1 className="card-title my-2 h-4 leading-none">{strMeal}</h1>
          {recipeDetail?.strCategory && (
            <div className="badge badge-info align-middle">
              {recipeDetail.strCategory}
            </div>
          )}
        </section>

        {userIngredientPresent && nbrMissingIngredients && (
          <p className="font-semibold">
            {userIngredientPresent?.length} matching ingredient out of{' '}
            {userIngredientPresent.length + nbrMissingIngredients} ({match} %)
          </p>
        )}
        <progress
          className="progress progress-warning"
          value={match}
          max="100"
          aria-label={`${match} % matching ingredients`}
        />

        <section className="flex flex-col gap-2">
          <p className="text-success font-semibold">You already have :</p>

          {userIngredientPresent && userIngredientPresent.length > 0 && (
            <TagsRecipe tags={userIngredientPresent} />
          )}
        </section>

        <section>
          <p className="text-error font-semibold">
            ❌ Missing:{' '}
            <span className="font-bold">
              {nbrMissingIngredients} ingredients
            </span>
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h1>🏷️ Tags</h1>
          {tags && <TagsRecipe tags={tags} variant="badge-secondary" />}
        </section>
        <Button className="btn-success mt-auto w-full align-bottom">
          <p>View full recipe</p>
        </Button>
      </div>
    </div>
  );
}
