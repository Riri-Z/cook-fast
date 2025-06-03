import { Meal } from '@/app/lib/types';
import { CardRecipe } from '@/app/ui/Recipe/card-recipe';
import { useMemo, useRef, useState } from 'react';
import { ArrowIcon } from './arrowIcon';
import { AnimatePresence, motion } from 'motion/react';

export default function Carousel({ elements }: Readonly<{ elements: Meal[] }>) {
  const recipeSize = 4;

  const dragStartX = useRef<number | null>(null);

  const [page, setPage] = useState(0);
  const [lastAction, setLastAction] = useState<null | 'left' | 'right'>(null);

  const totalPage = Math.ceil(elements.length / 5);

  const currRecipe = useMemo(() => {
    const start = recipeSize * page;
    const end = start + recipeSize;
    return elements.slice(start, end);
  }, [page, elements]);

  function handlePrev() {
    if (page === 0) return;
    setLastAction('left');
    setPage((prev) => Math.max(0, prev - 1));
  }

  function handleNext() {
    if (page === totalPage - 1) return;
    setLastAction('right');
    setPage((prev) => Math.min(totalPage, prev + 1));
  }

  function handleDrag(e: MouseEvent) {
    if (dragStartX?.current) {
      const deltaX = e.clientX - dragStartX?.current;
      if (deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  }

  function handleDragStart(e: MouseEvent) {
    if (e.clientX) {
      dragStartX.current = e.clientX;
    }
  }

  return (
    <div className="carousel rounded-box m-2 items-center gap-2">
      <ArrowIcon direction="left" handler={handlePrev} disabled={page === 0} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={page}
          className="flex h-full w-full gap-4"
          drag="x"
          dragElastic={0.015}
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDrag}
          initial={{ x: lastAction === 'left' ? 10 : -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        >
          {currRecipe.map((recipe) => (
            <Item key={recipe.idMeal} recipe={recipe}></Item>
          ))}
        </motion.div>
      </AnimatePresence>

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
