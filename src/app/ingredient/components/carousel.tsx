import { Meal } from '@/app/lib/types';
import { Button } from '@/app/ui/button';
import { CardRecipe } from '@/app/ui/Recipe/card-recipe';
import { useEffect, useState } from 'react';

export default function Carousel({ elements }: { elements: Meal[] }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [currentRecipes, setCurrentRecipes] = useState(
    elements.slice(start, end)
  );

  const lastIndex = elements.length - 1;
  function handlePrev() {
    setStart((prev) => (prev - 5 < 0 ? 0 : prev - 5));

    setEnd((prev) => (prev - 5 < 5 ? 5 : prev - 5));
  }
  function handleNext() {
    setStart((prev) => prev + 5);

    setEnd((prev) => (prev + 5 > lastIndex ? lastIndex : prev + 5));
  }

  useEffect(() => {
    setCurrentRecipes(elements.slice(start, end));
  }, [start, end, elements]);
  return (
    <div className="carousel rounded-box gap-2">
      <div>
        <Button disabled={start === 0} onClick={handlePrev}>
          prev
        </Button>
        {/*  gray out button if disabled */}
      </div>
      {currentRecipes.map((recipe) => (
        <Item key={recipe.idMeal} recipe={recipe}></Item>
      ))}

      <div>
        <Button disabled={end === lastIndex} onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}

function Item({ recipe }: { recipe: Meal }) {
  return (
    <div className="carousel-item">
      <CardRecipe key={recipe.idMeal} recipe={recipe} />
    </div>
  );
}
