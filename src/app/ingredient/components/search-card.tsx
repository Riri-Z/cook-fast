import { AddIngredient } from './add-ingredient';
import FetchRecipes from './fetch-recipes';

export default function SearchCard() {
  return (
    <div className="card bg-base-100 m-4 flex h-fit w-full max-w-[600px] flex-col gap-5 rounded-2xl p-6 shadow-lg">
      <h1 className="text-4xl font-bold">My Pantry</h1>
      <p className="">
        Add ingredients you already have and we&#39;ll find recipes that match.
      </p>
      <AddIngredient />
      <FetchRecipes />
    </div>
  );
}
