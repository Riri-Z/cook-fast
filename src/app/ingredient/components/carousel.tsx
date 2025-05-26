import { Meal } from '@/app/lib/types';
import { CardRecipe } from '@/app/ui/Recipe/card-recipe';
import { useMemo, useState } from 'react';
import { ArrowIcon } from './arrowIcon';

export default function Carousel({ elements }: Readonly<{ elements: Meal[] }>) {
  const recipeSize = 4;
  const [page, setPage] = useState(0);

  const totalPage = Math.ceil(elements.length / 5);

  const currRecipe = useMemo(() => {
    const start = recipeSize * page;
    const end = start + recipeSize;
    return elements.slice(start, end);
  }, [page, elements]);

  function handlePrev() {
    if (page === 0) return;
    setPage((prev) => Math.max(0, prev - 1));
  }
  function handleNext() {
    if (page === totalPage - 1) return;

    setPage((prev) => Math.min(totalPage, prev + 1));
  }

  return (
    <div className="carousel rounded-box m-2 items-center gap-2">
      <ArrowIcon direction="left" handler={handlePrev} disabled={page === 0} />

      {currRecipe.map((recipe) => (
        <Item key={recipe.idMeal} recipe={recipe}></Item>
      ))}

      <ArrowIcon
        direction="right"
        handler={handleNext}
        disabled={page === totalPage - 1}
      />
    </div>
  );
}

function Item({ recipe }: Readonly<{ recipe: Meal }>) {
  return <CardRecipe key={recipe.idMeal} recipe={recipe} />;
}
