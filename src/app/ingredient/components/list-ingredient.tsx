type ListIngredientProps = {
  ingredients: string[];
  clearAll: () => void;
};
import { TagIngredient } from '@/app/ingredient/components/tag-ingredient';
import { useFood } from '@/components/food-provider';

export function ListIngredient({
  ingredients,
  clearAll,
}: Readonly<ListIngredientProps>) {
  const { deleteIngredient } = useFood();

  return (
    <div className="flex flex-col gap-2">
      <section className="flex w-full justify-between">
        <h1 className="font-bold">Your ingredients :</h1>
        <button className="cursor-pointer" onClick={clearAll}>
          <p className="text-red-400">Clear all</p>
        </button>
      </section>
      <TagContainer tags={ingredients} action={deleteIngredient} />
    </div>
  );
}

function TagContainer({
  tags,
  action,
}: Readonly<{
  tags: string[];
  action: (el: string) => void;
}>) {
  return (
    <div className="flex w-full flex-wrap gap-2">
      {tags.map((e, i) => (
        <TagIngredient key={e + i} value={e} action={action} />
      ))}
    </div>
  );
}
