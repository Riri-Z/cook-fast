import 'server-only';
import { Meal } from './types';
import { extractMatchingProperty } from './utils';

const API_URL = process.env.API_URL;
/**
 * property from api  : strIngredient*
 */
const INGREDIENT_STR = process.env.INGREDIENT_STR;
const QUANTITY_STR = process.env.QUANTITY_STR;

type Params = {
  recipes: Meal[];
  ingredients: string[];
};
export async function getRecipes(ingredients: string[]): Promise<Meal[]> {
  const constructUrl = (ingredient: string) =>
    `https://${API_URL}i=${ingredient}`;

  const urlArr = ingredients.map((ingredient) => constructUrl(ingredient));

  const res: PromiseSettledResult<{
    meals: Meal[];
  }>[] = await Promise.allSettled(
    urlArr.map((url) =>
      fetch(url)
        .then((r) => r.json())
        .catch((e) => console.error('error url :', url, e))
    )
  );

  // No result found
  if (
    res.length === 1 &&
    res[0].status === 'fulfilled' &&
    res[0]?.value?.meals === null
  ) {
    return [];
  }

  const okResult = res
    .filter(
      // Type predicate to inform TS that is a PromiseFulfilledResult
      (promised): promised is PromiseFulfilledResult<{ meals: Meal[] }> =>
        promised.status === 'fulfilled' && promised.value.meals !== null
    )
    .map((meal) => meal.value);

  if (okResult.length === 0) {
    return [];
  }

  const errorResult = res
    .filter((promised) => promised.status === 'rejected')
    .map((er) => er.reason);

  if (errorResult.length > 0) {
    console.log('errorResult', errorResult);
  }

  return await formatRecipeData(okResult[0].meals, ingredients);
}

/**
 * Append  score, and format data for every recipe
 * @param recipes
 * @param ingredients
 * @returns
 */
export async function formatRecipeData(
  recipes: Params['recipes'],
  ingredients: Params['ingredients']
) {
  // compute and append extra property for each meal
  const recipeWithMatch = await Promise.allSettled(
    recipes.map((recipe) => {
      return computeExtraData(recipe, ingredients);
    })
  );

  // Return availaible meal from recipeWithMatch
  return recipeWithMatch
    .filter((recipe) => recipe.status === 'fulfilled')
    .map((e) => e.value)
    .sort((a, b) => (b.match ?? 0) - (a.match ?? 0));
}

/**
 * Compute match, ingredients, measures and nbrMissingIngredients to a recipe
 * @param meal
 * @param ingredients
 * @returns
 */
export async function computeExtraData(meal: Meal, ingredients: string[]) {
  const res = await fetch(
    'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + meal.idMeal
  );

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const recipe = data.meals?.[0];

  if (!recipe) return meal;

  // Append full recipe to meal
  meal.recipeDetail = recipe;

  // List ingredients from dish
  const mealIngredients = extractMatchingProperty(recipe, INGREDIENT_STR!);

  // Append ingredients to meal
  meal.ingredients = mealIngredients;
  const formattedArrIngredientFromRecipe = mealIngredients.map((e: string) =>
    e.trim().toLowerCase()
  );

  let countUsedIngredient = 0;
  const arrUserIngredientInRecipe = [];

  for (const ingredient of ingredients) {
    if (formattedArrIngredientFromRecipe.includes(ingredient)) {
      countUsedIngredient++;
      arrUserIngredientInRecipe.push(ingredient);
    }
  }

  meal.userIngredientPresent = arrUserIngredientInRecipe;

  // Todo :  implement fuse.js for better matchig score ?
  meal.match =
    ingredients.length > 0
      ? Math.round((countUsedIngredient / mealIngredients.length) * 100)
      : 0;

  // Append nbrMissingIngredients to meal
  meal.nbrMissingIngredients = mealIngredients.length - countUsedIngredient;
  if (QUANTITY_STR) {
    meal.measures = extractMatchingProperty(recipe, QUANTITY_STR);
  }

  return meal;
}
