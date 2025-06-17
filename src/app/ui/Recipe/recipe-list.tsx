import Carousel from '@/app/ingredient/components/carousel';
import type { Meal } from '@/app/lib/types';
import { useWidth } from '@/app/lib/useWidth';
import { CardRecipe } from './card-recipe';
import { useFood } from '@/components/food-provider';

export type Ingredient = {
  id: number;
  aisle: string;
  name: string;
  original: string;
  originalName: string;
  meta: string[];
  image: string;
  amount: number;
  unit: string;
  unitLong: string;
  unitShort: string;
};

type Props = {
  recipes: Meal[];
};

export const BREAK_POINTS = 1240;

export function RecipesList({ recipes }: Readonly<Props>) {
  const windowWidth = useWidth();
  const { loading } = useFood();

  if (recipes.length === 0) {
    return (
      <h1 className="card-title font-bold text-white">
        Recipe no found, try with another ingredient
      </h1>
    );
  }

  // Allow to hide recipes when user triggered search
  if (loading) {
    return;
  }

  return (
    <>
      <p
        data-testid="number-recipes-found"
        className="rounded-full bg-gray-200 px-3 text-sm font-medium text-gray-800 shadow-sm"
      >
        {recipes.length} recipes found
      </p>
      {windowWidth > BREAK_POINTS ? (
        <Carousel elements={recipes} loading={loading} />
      ) : (
        <div className="flex w-full flex-wrap justify-between gap-2">
          {recipes.map((recipe: Meal) => {
            return <CardRecipe key={recipe.idMeal} recipe={recipe} />;
          })}
        </div>
      )}
    </>
  );
}
