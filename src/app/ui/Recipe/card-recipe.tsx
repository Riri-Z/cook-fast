'use client';

import { Meal } from '@/app/lib/types';
import { useFood } from '@/components/food-provider';
import { Button } from '../button';
import TagsRecipe from './tags-recipe';

export function CardRecipe({ recipe }: Readonly<{ recipe: Meal }>) {
  const { listIngredient } = useFood();
  const {
    recipeDetail,
    userIngredientPresent,
    nbrMissingIngredients,
    strMealThumb,
    strMeal,
    match,
  } = recipe;
  /* 
    TODO :  
     TIme ? 
     difficulty?  
     match?  
     filter
 */

  const tags = recipeDetail?.strTags?.split(',') ?? [];
  return (
    <div className="card w-80  shadow-xl bg-base-100 rounded-4xl">
      <figure>
        <img
          src={strMealThumb}
          alt={strMeal}
          className="h-64  w-full object-cover"
        />
      </figure>

      <div className="card-body flex gap-2">
        <section className="flex gap-2 align-middle  items-center">
          <h1 className="card-title ">{strMeal}</h1>
          {recipeDetail?.strCategory && (
            <div className="badge badge-info align-middle">
              {recipeDetail.strCategory}
            </div>
          )}
        </section>

        <div className="mt-2">
          {userIngredientPresent && nbrMissingIngredients && (
            <p className=" font-semibold">
              {userIngredientPresent?.length} matching ingredient out of{' '}
              {userIngredientPresent.length + nbrMissingIngredients}
            </p>
          )}
          <progress
            className="progress progress-warning"
            value={match}
            max="100"
          />
          <p className="text-sm text-warning font-semibold">{match} %</p>
        </div>

        <section className="flex flex-col gap-2">
          <p className="text-success font-semibold"> You already have:</p>
          <div className="flex gap-2">
            {userIngredientPresent &&
              userIngredientPresent.length > 0 &&
              userIngredientPresent.map((e) => (
                <div
                  key={e}
                  className="badge badge-outline badge-primary flex justify-center align-middle"
                >
                  <p>{e}</p>
                </div>
              ))}
          </div>

          <p className="text-error font-semibold mt-2">
            ❌ Missing:{' '}
            <span className="font-bold">
              {nbrMissingIngredients} ingredients
            </span>
          </p>

          <h1>🏷️ Tags</h1>
          {tags && <TagsRecipe tags={tags} />}
        </section>
        <Button className="btn-success mt-auto   w-full align-bottom ">
          <p>View full recipe</p>
        </Button>
      </div>
    </div>
  );
}
