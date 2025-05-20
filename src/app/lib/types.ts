export interface RecipeDetail {
  /** Identifiant unique */
  idMeal: string;

  /** Nom de la recette */
  strMeal: string;

  /** Nom alternatif (souvent nul) */
  strMealAlternate: string | null;

  /** Catégorie (Dessert, Beef, Side Dish, …) */
  strCategory: string;

  /** Origine géographique (British, Italian, …) */
  strArea: string;

  /** Instructions complètes, paragraphe(s) */
  strInstructions: string;

  /** URL vers la vignette 640 × 480 */
  strMealThumb: string;

  /** Tags séparés par virgules (ex. "Cake,Sweet") */
  strTags: string | null;

  /** URL YouTube de la vidéo de la recette */
  strYoutube: string;

  /* ---------------------------------------------------------- *
   *  Ingrédients (1 – 20) et mesures correspondantes
   * ---------------------------------------------------------- */

  strIngredient1: string | null;
  strMeasure1: string | null;
  strIngredient2: string | null;
  strMeasure2: string | null;
  strIngredient3: string | null;
  strMeasure3: string | null;
  strIngredient4: string | null;
  strMeasure4: string | null;
  strIngredient5: string | null;
  strMeasure5: string | null;
  strIngredient6: string | null;
  strMeasure6: string | null;
  strIngredient7: string | null;
  strMeasure7: string | null;
  strIngredient8: string | null;
  strMeasure8: string | null;
  strIngredient9: string | null;
  strMeasure9: string | null;
  strIngredient10: string | null;
  strMeasure10: string | null;
  strIngredient11: string | null;
  strMeasure11: string | null;
  strIngredient12: string | null;
  strMeasure12: string | null;
  strIngredient13: string | null;
  strMeasure13: string | null;
  strIngredient14: string | null;
  strMeasure14: string | null;
  strIngredient15: string | null;
  strMeasure15: string | null;
  strIngredient16: string | null;
  strMeasure16: string | null;
  strIngredient17: string | null;
  strMeasure17: string | null;
  strIngredient18: string | null;
  strMeasure18: string | null;
  strIngredient19: string | null;
  strMeasure19: string | null;
  strIngredient20: string | null;
  strMeasure20: string | null;

  /* ---------------------------------------------------------- */

  /** Source externe (souvent BBC GoodFood, etc.) */
  strSource: string | null;

  /** Crédit d’image (rarement renseigné) */
  strImageSource: string | null;

  /** “Yes” si licence CC confirmée, sinon null */
  strCreativeCommonsConfirmed: string | null;

  /** Date de dernière modif (format ISO) ou null */
  dateModified: string | null;
}

export type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  recipe?: RecipeDetail | null;
  ingredients?: string[];
  measures?: string[];
  match?: number;
  nbrMissingIngredients?: number;
};
