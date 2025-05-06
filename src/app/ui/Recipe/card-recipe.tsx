import Image from "next/image";
import { Recipe } from "./recipe-list";

export function CardRecipe({ recipe }: { recipe: Recipe }) {
  return (
    <div>
      <h1>{recipe.title}</h1>
      <Image src={recipe.image} width={300} height={300} alt={recipe.title} />
    </div>
  );
}
