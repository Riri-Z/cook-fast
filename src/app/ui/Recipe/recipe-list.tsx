import type { Meal } from '@/app/lib/types';
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

export function RecipesList({ recipes }: Readonly<Props>) {
  return (
    <div className="flex  flex-col my-10 gap-2">
      <h1 className="font-bold">List des recettes</h1>{' '}
      <h1 className="font-bold">{recipes.length}</h1>
      <div className="flex w-fit flex-wrap justify-center gap-2">
        {recipes.length > 0 ? (
          recipes.map((recipe: Meal) => {
            return <CardRecipe key={recipe.idMeal} recipe={recipe} />;
          })
        ) : (
          <h1 className="font-bold text-green-700">recipe no found</h1>
        )}
      </div>
    </div>
  );
}
