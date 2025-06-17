'use client';
import clsx from 'clsx';
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type TagsRecipeProps = {
  tags: string[];
  variant?: string;
};

const SCROLL_VALUE = 100;

export default function TagsRecipe({
  tags,
  variant = 'badge-success',
}: Readonly<TagsRecipeProps>) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [atStart, setAtStart] = useState<null | boolean>(true);
  const [atEnd, setAtEnd] = useState<null | boolean>(false);

  // Handle scroll behaviour
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -SCROLL_VALUE : SCROLL_VALUE,
      behavior: 'smooth',
    });
  };

  const checkOverflow = () => {
    const el = scrollRef.current;
    if (el) {
      setAtStart(el.scrollLeft <= 1);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkOverflow();
    const el = scrollRef.current;
    if (!el) return;
    window.addEventListener('resize', checkOverflow);

    // Listen to the scroll event because smooth scrolling updates scrollLeft asynchronously
    el.addEventListener('scroll', checkOverflow);
    return () => {
      window.removeEventListener('resize', checkOverflow);
      el.removeEventListener('scroll', checkOverflow);
    };
  }, []);

  const Container = ({ tags }: { tags: string[] }) => {
    const sortedTags = tags.toSorted((a, b) => a.length - b.length);

    return (
      <>
        {sortedTags.length > 0 ? (
          <main className="flex gap-1">
            {sortedTags.map((tag) => (
              <Badge key={tag} tag={tag} variant={variant} />
            ))}
          </main>
        ) : (
          <Badge tag="None" variant={variant} />
        )}
      </>
    );
  };

  return (
    <div className="flex items-center justify-between gap-1">
      {!atStart && (
        <ChevronLeftCircle
          className="hover:scale-110"
          onClick={() => scroll('left')}
          size={24}
        />
      )}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-hidden"
        style={{ scrollBehavior: 'smooth' }}
      >
        <Container tags={tags} />
      </div>
      {!atEnd && (
        <ChevronRightCircle
          className="hover:scale-110"
          onClick={() => scroll('right')}
          size={24}
        />
      )}
    </div>
  );
}

function Badge({ tag, variant }: Readonly<{ tag: string; variant: string }>) {
  return (
    <p className={clsx('badge badge-outline text-bold max-w-fit ' + variant)}>
      {tag}
    </p>
  );
}
