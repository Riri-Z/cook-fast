import { Button } from '@/app/ui/button';
import { useFood } from '@/components/food-provider';
import { ChefHat } from 'lucide-react';

export default function FetchRecipes() {
  const {
    listIngredient,
    updateRecipes,
    updateHasSearched,
    loading,
    updateLoading,
    updateError,
    error,
  } = useFood();
  const nbrIngredient = listIngredient.length;

  const handleFetchRecipes = async () => {
    if (error) {
      updateError(false);
    }
    try {
      updateLoading(true);

      const res = await fetch(
        'api/recipes?' + 'ingredients=' + listIngredient.join(',')
      );
      if (!res.ok) {
        // On récupère le message JSON renvoyé par le route handler
        const { message } = await res.json();
        console.error(message);
        throw new Error(message);
      }

      const data = await res.json();
      updateRecipes(data);
      updateHasSearched(true);
    } catch (error) {
      console.error(error);
      updateError(true);
    } finally {
      updateLoading(false);
    }
  };

  return (
    <div
      className="tooltip tooltip-bottom"
      data-tip={
        nbrIngredient === 0
          ? 'Add an ingredient to continue'
          : 'Click to display recipe'
      }
    >
      <Button
        disabled={listIngredient.length === 0}
        className="btn-secondary flex w-full self-center rounded-3xl text-white"
        onClick={handleFetchRecipes}
      >
        {loading ? (
          <span className="loading loading-spinner loading-md" />
        ) : (
          <ChefHat />
        )}
        <p>Generate recipes</p>
        {nbrIngredient > 0 && (
          <p className="badge badge-ghost h-fit">{nbrIngredient} ingredients</p>
        )}
      </Button>
    </div>
  );
}
