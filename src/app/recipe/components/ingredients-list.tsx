type Ingredient = {
  name: string;
  quantity: string;
};
export function IngredientList({
  listIngredients,
}: {
  listIngredients: Ingredient[];
}) {
  return (
    <div className="card card-lg bg-base-200 w-full max-w-2xl shadow-xl">
      <div className="card-body">
        <h1 className="card-title">Ingredients</h1>
        {listIngredients.map((ing) => (
          <div key={ing.name} className="flex">
            <p className="">
              {ing.quantity}{' '}
              <span className="text-accent font-bold underline">
                {ing.name}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
