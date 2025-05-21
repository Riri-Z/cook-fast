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
      className="card border-2  shadow-xl
   overflow-hidden relative flex w-72 "
    >
      <span className="rounded-full bg-secondary opacity-65  w-16  h-16 flex justify-center items-center absolute -top-4 -right-4">
        <p className="text-xl font-bold text-white">{id}</p>
      </span>
      <div className="card-body align-middle">
        <span className="self-center ">{logo}</span>
        <h2 className="card-title self-center">{title}</h2>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
}
