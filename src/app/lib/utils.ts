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
