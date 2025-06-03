import clsx from 'clsx';
import { JSX } from 'react';

type PropsFeatureCard = {
  id: number;
  title: string;
  index: number;
  description: string;
  logo: JSX.Element;
};
export default function FeatureCard({
  id,
  title,
  description,
  logo,
  index,
}: Readonly<PropsFeatureCard>) {
  return (
    <div
      key={id}
      className={clsx(
        'card bg-base-100 fade-in-card relative flex w-72 overflow-hidden',
        `delay-[${1 * index}s]`
      )}
      style={{ animationDelay: `${index * 0.5}s` }}
    >
      <span className="bg-secondary absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full">
        <p className="text-xl font-bold text-white">{id}</p>
      </span>
      <div className="card-body align-middle">
        <span className="self-center">{logo}</span>
        <h2 className="card-title self-center">{title}</h2>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
}
