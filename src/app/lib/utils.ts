import { error } from 'console';
import { Meal } from './types';

export function extractMatchingProperty(
  data: object,
  matchingStr: string
): string[] {
  if (matchingStr.trim() === '') return [];

  return Object.entries(data)
    .filter(([key, val]) => key.includes(matchingStr) && val.trim() !== '')
    .map(([, val]) => val);
}
/* 

{
    "idMeal": "53076",
    "strMeal": "Bread omelette",
    "strMealAlternate": null,
    "strCategory": "Breakfast",
    "strArea": "Indian",
    "strInstructions": "Make and enjoy",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg",
    "strTags": null,
    "strYoutube": "",
    "strIngredient1": "Bread",
    "strIngredient2": "Egg",
    "strIngredient3": "Salt",
    "strIngredient4": "",
    "strIngredient5": "",
    "strIngredient6": "",
    "strIngredient7": "",
    "strIngredient8": "",
    "strIngredient9": "",
    "strIngredient10": "",
    "strIngredient11": "",
    "strIngredient12": "",
    "strIngredient13": "",
    "strIngredient14": "",
    "strIngredient15": "",
    "strIngredient16": "",
    "strIngredient17": "",
    "strIngredient18": "",
    "strIngredient19": "",
    "strIngredient20": "",
    "strMeasure1": "2",
    "strMeasure2": "2",
    "strMeasure3": "0.5",
    "strMeasure4": " ",
    "strMeasure5": " ",
    "strMeasure6": " ",
    "strMeasure7": " ",
    "strMeasure8": " ",
    "strMeasure9": " ",
    "strMeasure10": " ",
    "strMeasure11": " ",
    "strMeasure12": " ",
    "strMeasure13": " ",
    "strMeasure14": " ",
    "strMeasure15": " ",
    "strMeasure16": " ",
    "strMeasure17": " ",
    "strMeasure18": " ",
    "strMeasure19": " ",
    "strMeasure20": " ",
    "strSource": "",
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
}
*/
export function extractIngredientsAndQuantities(meal: Meal) {
  if (!process.env.INGREDIENT_STR || !process.env.QUANTITY_STR) {
    throw error('missing INGREDIENT_STR || QUANTITY_STR ');
  }
  const arrIngredients = extractMatchingProperty(
    meal,
    process.env.INGREDIENT_STR
  );
  const arrQuantity = extractMatchingProperty(meal, process.env.QUANTITY_STR);
  const res: { name: string; quantity: string }[] = [];

  arrIngredients.forEach((e, i) =>
    res.push({ name: e, quantity: arrQuantity[i] })
  );
  return res;
}
