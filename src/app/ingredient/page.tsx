'use client';

import { useFood } from '@/components/food-provider';
import { RecipesList } from '../ui/Recipe/recipe-list';
import { AddIngredient } from './components/add-ingredient';
import FetchRecipes from './components/fetch-recipes';
import Footer from './components/footer';

export default function Page() {
  const { recipes } = useFood();
  return (
    <div className=" flex  flex-col   items-center  bg-[url('/food.jpg')] bg-cover h-[calc(100dvh-var(--header-height))] overflow-auto">
      <div className="card bg-base-100 max-w-[550px] rounded-2xl shadow-lg h-fit flex flex-col  gap-5 mt-10 p-5">
        <h1 className="font-bold text-4xl">My Pantry</h1>
        <p className="">
          Add ingredients you already have and we&#39;ll find recipes that
          match.
        </p>

        <AddIngredient />
      </div>
      {recipes.length > 0 ? (
        <RecipesList recipes={recipes} />
      ) : (
        // DIsplay this if user has tried to fetch recipe, and api returned any
        <p>Empty recipe</p>
      )}
      <Footer>
        <FetchRecipes />
      </Footer>
    </div>
  );
}
