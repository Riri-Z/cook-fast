"use client";
import { useState } from "react";
import { Ingredient, Recipe, RecipesList } from "../ui/Recipe/recipe-list";
import { CardFetch } from "../ui/card-fetch";
import { usePathname } from "next/navigation";
import { AddIngredient } from "../ui/Recipe/ingredient/add-ingredient";

export default function Home() {
  const pathname = usePathname();

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleUpdateRecipes = (data: Recipe[]) => {
    setRecipes(data);
  };

  return (
    <div className="w-full h-full bg-gray-600 flex items-center  flex-col gap-3 border-2">
      <p>Current pathname: {pathname}</p>
      <AddIngredient />
      <CardFetch updateRecipe={handleUpdateRecipes} />
      {recipes && recipes.length > 0 && <RecipesList recipes={recipes} />}
    </div>
  );
}
