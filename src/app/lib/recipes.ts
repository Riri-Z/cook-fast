import "server-only";

const { API_URL, API_KEY_RECIPE } = process.env;

if (!API_URL || !API_KEY_RECIPE) {
  throw new Error("Missing API_URL or API_KEY_RECIPE env variable");
}

export async function getRecipes(ingredients: string[], numberRecipes = 1) {
  const query = `ingredients=${ingredients.join(",")}&number=${numberRecipes}`;

  const url = `${API_URL}/findByIngredients?apiKey=${API_KEY_RECIPE}&${query}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`API request failed with status ${res.statusText}`);
  }

  return await res.json();
}
