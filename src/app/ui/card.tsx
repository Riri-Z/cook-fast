import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode } from 'react';

type Card = {
  title?: string;
  description?: string;
  children?: ReactNode;
  figureSrc?: string;
  altFigure?: string;
  className?: string;
};
export default function Card({
  title = '',
  description = '',
  children,
  figureSrc,
  altFigure = '',
  className,
}: Readonly<Card>) {
  return (
    <div
      className={clsx(
        'card bg-base-200 w-96 items-center justify-center rounded-4xl align-middle shadow-sm',
        className
      )}
    >
      <figure>
        {figureSrc && (
          <Image src={figureSrc} alt={altFigure} width={450} height={300} />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {children}
      </div>
    </div>
  );
}
