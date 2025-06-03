import clsx from 'clsx';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react';

type Direction = 'left' | 'right';

export function ArrowIcon({
  direction,
  handler,
  disabled,
}: Readonly<{
  direction: Direction;
  handler: () => void;
  disabled: boolean;
}>) {
  const ArrowIcon = () => {
    if (direction === 'left') {
      return <CircleArrowLeft size={30} />;
    }
    return <CircleArrowRight size={30} />;
  };

  return (
    <button
      className={clsx(
        'btn btn-circle bg-base-100 text-primary hover:bg-base-200 shadow-lg',
        {
          'opacity-0': disabled,
        }
      )}
      onClick={handler}
    >
      <ArrowIcon />
    </button>
  );
}
