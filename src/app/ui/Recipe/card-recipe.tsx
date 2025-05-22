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
    <div
      className="card w-72 hover:cursor-pointer

  shadow-xl bg-base-100 rounded-4xl"
    >
      <figure>
        <img src={strMealThumb} alt={strMeal} className="h-64  w-full " />
      </figure>

      <div className="card-body p-4 flex ">
        <section className="flex gap-2 align-middle  items-center">
          <h1 className="card-title h-4">{strMeal}</h1>
          {recipeDetail?.strCategory && (
            <div className="badge badge-info align-middle">
              {recipeDetail.strCategory}
            </div>
          )}
        </section>

        <div className="">
          {userIngredientPresent && nbrMissingIngredients && (
            <p className=" font-semibold">
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
        </div>

        <section className="flex flex-col gap-2">
          <p className="text-success font-semibold">You already have :</p>

          {userIngredientPresent && userIngredientPresent.length > 0 && (
            <TagsRecipe tags={userIngredientPresent} />
          )}
        </section>

        {/*    <section>
          <p className="text-error font-semibold ">
            ❌ Missing:{' '}
            <span className="font-bold">
              {nbrMissingIngredients} ingredients
            </span>
          </p>
        </section> */}
        <section className="flex gap-2  flex-col">
          <h1>🏷️ Tags</h1>
          {tags && <TagsRecipe tags={tags} variant="badge-secondary" />}
        </section>
        <Button className="btn-success mt-auto   w-full align-bottom ">
          <p>View full recipe</p>
        </Button>
      </div>
    </div>
  );
}
