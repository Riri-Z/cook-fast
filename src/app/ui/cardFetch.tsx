"use client";
import { useState } from "react";
import { Button } from "./button";
import { Recipe } from "./Recipe/RecipesList";

type Props = {
  updateRecipe: (data: Recipe[]) => void;
};
// TO rename
export function CardFetch({ updateRecipe }: Props) {
  //   const ingredients = ["tomatoes", "carrots"];
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  console.log("errorMsg", errorMsg);
  const handleFetchRecipes = async () => {
    setErrorMsg(null); // reset

    const params = new URLSearchParams({
      ingredients: ["carrots", "tomatoes"].join(","),
      number: "5",
    });
    const res = await fetch("api/recipes?" + params.toString());

    if (!res.ok) {
      // On récupère le message JSON renvoyé par le route handler
      const { message } = await res.json();
      setErrorMsg(message);
    }

    const data = await res.json();
    updateRecipe(data);
  };
  return (
    <>
      <Button onClick={handleFetchRecipes}>
        <p>FETCh</p>
      </Button>
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
    </>
  );
}
