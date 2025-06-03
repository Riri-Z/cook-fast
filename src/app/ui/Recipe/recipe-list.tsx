import Carousel from '@/app/ingredient/components/carousel';
import type { Meal } from '@/app/lib/types';
import { useWidth } from '@/app/lib/useWidth';
import { CardRecipe } from './card-recipe';

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

  if (recipes.length === 0) {
    return (
      <h1 className="card-title font-bold text-white">
        Recipe no found, try with another ingredient
      </h1>
    );
  }
  return (
    <div className="h-full">
      {windowWidth > BREAK_POINTS ? (
        <Carousel elements={recipes} />
      ) : (
        <div className="flex flex-wrap justify-between gap-2">
          {recipes.map((recipe: Meal) => {
            return <CardRecipe key={recipe.idMeal} recipe={recipe} />;
          })}
        </div>
      )}
    </div>
  );
}
