import { getRecipes } from '@/app/lib/recipes';
import { Meal } from '@/app/lib/types';
import { NextResponse } from 'next/server';

/**
 * Fetch recipes
 * @param request
 * @returns
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Get ingredients from url
    const ingredients = searchParams.get('ingredients')?.split(',');

    if (!ingredients) {
      return NextResponse.json({
        message: 'ingredients are missing',
        status: 404,
      });
    }

    const recipes: Meal[] = await getRecipes(ingredients);
    if (recipes.length === 0) {
      return NextResponse.json(recipes);
    }

    return NextResponse.json(recipes);
  } catch (err: unknown) {
    console.error(err);
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ message: message }, { status: 500 });
  }
}
