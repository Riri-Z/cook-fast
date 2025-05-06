import { Recipe } from "./RecipesList";

export function CardRecipe({ recipe }: { recipe: Recipe }) {
  return (
    <div>
      <h1>{recipe.title}</h1>
    </div>
  );
}
