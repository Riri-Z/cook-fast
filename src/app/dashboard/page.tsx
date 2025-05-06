"use client";
import { useState } from "react";
import { CardFetch } from "../ui/cardFetch";
import { Recipe, RecipesList } from "../ui/Recipe/RecipesList";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleUpdateRecipes = (data: Recipe[]) => {
    setRecipes(data);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>Test</p>
      <CardFetch updateRecipe={handleUpdateRecipes} />
      {recipes && recipes.length > 0 && <RecipesList recipes={recipes} />}
    </div>
  );
}
