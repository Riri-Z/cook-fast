import { Meal } from '@/app/lib/types';
import { CardRecipe } from '@/app/ui/Recipe/card-recipe';
import { useMemo, useRef, useState } from 'react';
import { ArrowIcon } from './arrowIcon';
import { AnimatePresence, motion } from 'motion/react';

const NUMBER_ITEMS_PER_PAGE = 4;

export default function Carousel({
  elements,
  // loading,
}: Readonly<{ elements: Meal[]; loading: boolean }>) {
  const dragStartX = useRef<number | null>(null);

  const [page, setPage] = useState(0);
  const [lastAction, setLastAction] = useState<null | 'left' | 'right'>(null);

  const totalPage = Math.ceil(elements.length / NUMBER_ITEMS_PER_PAGE);

  const currRecipe = useMemo(() => {
    const start = NUMBER_ITEMS_PER_PAGE * page;
    const end = start + NUMBER_ITEMS_PER_PAGE;
    return elements.slice(start, end);
  }, [page, elements]);

  function handleNavigate(page: number) {
    setPage(page);
  }

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

  // Update recipe on swipe / drag
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
    <div className="flex flex-col items-center gap-4">
      <div
        data-testid="carousel"
        className="carousel rounded-box mb-2 items-center gap-2 overflow-visible"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={page}
            className="flex w-full gap-4 overflow-visible"
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
      </div>
      {/* Carousel NAVIGATION */}
      <div className="m-auto flex justify-center gap-2 text-center">
        <ArrowIcon
          direction="left"
          handler={handlePrev}
          disabled={page + 1 === 1}
        />
        <Pagination
          currentPage={page}
          totalPage={totalPage}
          handleNavigate={handleNavigate}
        />
        <ArrowIcon
          direction="right"
          handler={handleNext}
          disabled={page + 1 === totalPage}
        />
      </div>
    </div>
  );
}

function Item({ recipe }: Readonly<{ recipe: Meal }>) {
  return <CardRecipe key={recipe.idMeal} recipe={recipe} />;
}

type PaginationProps = {
  currentPage: number;
  totalPage: number;
  handleNavigate: (page: number) => void;
};

function Pagination({
  currentPage,
  totalPage,
  handleNavigate,
}: Readonly<PaginationProps>) {
  // Init arr of page
  const arrInput = Array.from({ length: totalPage }, (_x, i) => i + 1);

  return (
    <div className="join">
      {arrInput.map((label) => {
        return (
          <input
            key={label - 1}
            data-testid={`btn-pagination-${label}`}
            onChange={() => handleNavigate(label - 1)}
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label={String(label)}
            checked={currentPage == label - 1}
          />
        );
      })}
    </div>
  );
}
