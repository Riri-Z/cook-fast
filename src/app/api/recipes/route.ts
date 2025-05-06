import { getRecipes } from "@/app/lib/recipes";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const ingredients = searchParams.get("ingredients")?.split(",");
    const numberRecipes = searchParams.get("number") ?? 1;

    if (!ingredients) {
      throw new Error("ingredients is missinng: ", ingredients);
    }

    const recipes = await getRecipes(ingredients, Number(numberRecipes));
    console.log("recipes", recipes);
    return NextResponse.json(recipes);
  } catch (err: unknown) {
    console.error(err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ message: message }, { status: 500 });
  }
}
