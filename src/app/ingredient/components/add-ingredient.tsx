import { useFood } from '@/components/food-provider';
import { KeyboardEvent, useState } from 'react';
import { Button } from '../../ui/button';
import { ListIngredient } from './list-ingredient';

export function AddIngredient() {
  const [newIngredient, setNewIngredient] = useState<string>('');

  const { listIngredient, addIngredient, handleClearIngredients } = useFood();

  const submitNewIngredient = () => {
    if (listIngredient.includes(newIngredient)) {
      return;
    }
    addIngredient(newIngredient);
    setNewIngredient('');
  };

  const disabledButton = () => {
    return newIngredient.trim() == '' || listIngredient.includes(newIngredient);
  };

  const EnterDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      submitNewIngredient();
    }
  };

  return (
    <>
      <section className="flex max-w-full justify-between gap-2">
        <input
          className="input w-full"
          name="ingredient"
          placeholder="Eg : Eggs, beef, avocado..."
          value={newIngredient}
          onKeyDown={EnterDown}
          onChange={(e) => setNewIngredient(e.target.value)}
          type="text"
        />
        <Button disabled={disabledButton()} onClick={submitNewIngredient}>
          Add
        </Button>
      </section>
      <ListIngredient
        ingredients={listIngredient}
        clearAll={handleClearIngredients}
      />
    </>
  );
}
