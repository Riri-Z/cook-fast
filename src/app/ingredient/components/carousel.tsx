import { Meal } from '@/app/lib/types';
import { CardRecipe } from '@/app/ui/Recipe/card-recipe';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function Carousel({ elements }: { elements: Meal[] }) {
  const pageSize = 5;
  const [page, setPage] = useState(0);

  const totalPage = Math.ceil(elements.length / 5);

  const currRecipe = useMemo(() => {
    const start = pageSize * page;
    const end = start + 5;
    return elements.slice(start, end);
  }, [page, elements]);

  function handlePrev() {
    setPage((prev) => Math.max(0, prev - 1));
  }
  function handleNext() {
    setPage((prev) => Math.min(totalPage, prev + 1));
  }

  return (
    <div className="carousel rounded-box gap-2 items-center">
      {page > 0 && (
        <button
          className="rounded-4xl bg-secondary  border-0 shadow-none"
          disabled={page === 0}
          onClick={handlePrev}
        >
          <CircleArrowLeft size={32} color="black" />
        </button>
      )}

      {/*  gray out button if disabled */}

      {currRecipe.map((recipe) => (
        <Item key={recipe.idMeal} recipe={recipe}></Item>
      ))}

      {page < totalPage - 1 && (
        <button
          className="rounded-4xl bg-secondary border-0 shadow-none"
          disabled={page === totalPage - 1}
          onClick={handleNext}
        >
          <CircleArrowRight size={32} />
        </button>
      )}
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
