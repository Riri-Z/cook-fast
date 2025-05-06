type ListIngredientProps = {
  ingredients: string[];
  clearAll: () => void;
};
import { XMarkIcon } from "@heroicons/react/24/outline";

export function ListIngredient({ ingredients, clearAll }: ListIngredientProps) {
  return (
    <div>
      <section className="flex gap-2">
        <h1>List ingredients</h1>
        <XMarkIcon
          className="h-6 w-6 text-black rounded-4xl bg-red-400"
          onClick={clearAll}
        />
      </section>
      {ingredients.map((e, i) => (
        <p key={i + e}>{e}</p>
      ))}
    </div>
  );
}
