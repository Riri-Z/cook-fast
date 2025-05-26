'use client';

import { Button } from '@/app/ui/button';
import { useFood } from '@/components/food-provider';
import { ChefHat } from 'lucide-react';
import { useState } from 'react';

export default function FetchRecipes() {
  const { listIngredient, updateRecipes, updateHasSearched } = useFood();
  const nbrIngredient = listIngredient.length;

  const [loading, setloading] = useState(false);
  const handleFetchRecipes = async () => {
    try {
      setloading(true);
      const params = new URLSearchParams({
        ingredients:
          nbrIngredient > 0 ? listIngredient.join(',') : listIngredient[0],
      });
      const res = await fetch('api/recipes?' + params.toString());

      if (!res.ok) {
        // On récupère le message JSON renvoyé par le route handler
        const { message } = await res.json();
        console.error(message);
      }

      const data = await res.json();
      updateRecipes(data);
      updateHasSearched(true);
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  return (
    <Button
      disabled={listIngredient.length === 0}
      className="btn-secondary flex w-full self-center rounded-3xl text-white"
      onClick={handleFetchRecipes}
    >
      {loading ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        <ChefHat />
      )}
      <p className="">Generate recipes</p>
      {nbrIngredient > 0 && (
        <p className="badge badge-ghost h-fit">{nbrIngredient} ingredients</p>
      )}
    </Button>
  );
}
