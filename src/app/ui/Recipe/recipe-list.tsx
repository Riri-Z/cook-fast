import { CardRecipe } from "./card-recipe";

export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  usedIngredients: Ingredient[];
  missedIngredients: Ingredient[];
  unusedIngredients: Ingredient[];
  likes: number;
};

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
  recipes: Recipe[];
};

export function RecipesList({ recipes }: Props) {
  return (
    <div>
      <h1>List des recettes </h1>
      {recipes.map((recipe: Recipe) => {
        return <CardRecipe key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
}
