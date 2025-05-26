import { JSX } from 'react';

type PropsFeatureCard = {
  id: number;
  title: string;
  description: string;
  logo: JSX.Element;
};
export default function FeatureCard({
  id,
  title,
  description,
  logo,
}: PropsFeatureCard) {
  return (
    <div
      key={id}
      className="card relative flex w-72 overflow-hidden border-2 shadow-xl"
    >
      <span className="bg-secondary absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full opacity-65">
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
