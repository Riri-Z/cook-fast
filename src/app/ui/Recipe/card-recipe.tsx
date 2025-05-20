import { Meal } from '@/app/lib/types';
import { useFood } from '@/components/food-provider';
import { Button } from '../button';

export function CardRecipe({ recipe }: Readonly<{ recipe: Meal }>) {
  const { listIngredient } = useFood();

  /* 
    TODO :  
     TIme ? 
     difficulty?  
     match?  
     filter
 */
  return (
    <div className="items-start bg-base-100 rounded-2xl flex flex-col">
      <img
        className="rounded-t-2xl"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width={350}
        height={350}
      />

      <div className="flex flex-col m-2 gap-4 w-4/5 ">
        <h1 className="font-extrabold">{recipe.strMeal}</h1>
        <p className="font-bold">Match ingredients: {recipe.match} %</p>
        <progress
          className="progress progress-warning "
          value={recipe.match}
          max="100"
        ></progress>
        <section className="flex flex-col gap-2">
          You already have :
          <div className="flex gap-2">
            {listIngredient.length > 0 &&
              listIngredient.map((e) => (
                <div key={e} className="badge badge-soft badge-accent">
                  {e}
                </div>
              ))}
          </div>
          <p>And need {recipe.nbrMissingIngredients} more ingredients</p>
        </section>
      </div>
      <Button className="btn-primary w-full">View full RecipeDetail</Button>
    </div>
  );
}
