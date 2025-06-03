import { Meal, RecipeDetail } from '@/app/lib/types';
import { IngredientList } from '../components/ingredients-list';
import { extractIngredientsAndQuantities } from '@/app/lib/utils';
import { Instruction } from '../components/instructions';
import Link from 'next/link';
import TagsRecipe from '@/app/ui/Recipe/tags-recipe';

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const { id } = await params;

  if (!id) {
    return <div>Id is missing</div>;
  }

  const data = await fetch(
    'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id
  );
  if (!data.ok) {
    return <div>Recipe not found</div>;
  }
  const recipe = await data.json();
  const selectedRecipe: Meal & RecipeDetail = recipe?.meals?.[0];

  console.log('selectedRecipe', selectedRecipe);

  if (!selectedRecipe) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4 align-middle">
        <h1 className="font-bold">
          Sorry this recipe is not available, please return back
        </h1>
        <Link
          className="bg-accent flex h-fit w-20 justify-center rounded-3xl text-white shadow-2xl"
          href="/ingredient"
        >
          Back
        </Link>
      </div>
    );
  }
  const ingredients = extractIngredientsAndQuantities(selectedRecipe);

  // Format youtube endpoint to allow embeding video
  const formatedStrVideo = selectedRecipe.strYoutube.replace(
    'watch?v=',
    'embed/'
  );

  return (
    <div className="bg-base-100 flex min-h-screen flex-col items-center gap-6 px-8 py-8">
      {/* Hero */}
      <picture className="flex justify-center">
        <img
          className="size-9/12 max-w-2xl rounded-4xl"
          src={selectedRecipe.strMealThumb}
          alt={selectedRecipe.strMeal}
        />
      </picture>

      <section className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">{selectedRecipe.strMeal}</h1>
        {selectedRecipe.strTags && (
          <TagsRecipe tags={selectedRecipe.strTags.split(',')} />
        )}
      </section>

      {/* Ingredient */}
      {ingredients && <IngredientList listIngredients={ingredients} />}

      {selectedRecipe.strInstructions && (
        <Instruction
          instructions={selectedRecipe.strInstructions}
          video={formatedStrVideo}
        />
      )}

      {/* Action */}
      <Link
        className="bg-accent transform: flex h-8 w-26 items-center justify-center rounded-3xl font-bold text-white shadow-2xl hover:scale-105"
        href="/ingredient"
      >
        <p>Back</p>
      </Link>
    </div>
  );
}
