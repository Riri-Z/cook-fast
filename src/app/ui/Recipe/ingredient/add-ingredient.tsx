import { useState } from "react";
import { Button } from "../../button";
import { ListIngredient } from "./list-ingredient";

export function AddIngredient() {
  /* TODO :  LIFT INGREDIENTS AND RECIPES to  a context  */
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [newIngredient, setNewIngredient] = useState<string>("");

  const handleAddIngredient = () => {
    setIngredients([...ingredients, newIngredient]);
    setNewIngredient("");
  };

  const handleClearIngredients = () => {
    setIngredients([]);
  };
  return (
    <>
      <ListIngredient
        ingredients={ingredients}
        clearAll={handleClearIngredients}
      />
      <div className="w-[300px] p-2 border-2">
        <section>
          <label className="flex-col gap-4">
            ingredient{/* */}
            <input
              className="border-2"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              type="text"></input>
          </label>
          <Button onClick={handleAddIngredient}>saved</Button>
        </section>
      </div>
    </>
  );
}
