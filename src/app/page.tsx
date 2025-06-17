'use client';

import Loading from './loading';
import FeatureContainer from './ui/landing/feature-container';
import Hero from './ui/landing/hero';

export default function Page() {
  return (
    <div
      className={`backdrop-opacity-[.15 flex h-full w-full flex-col gap-6 bg-[url('/background-home.jpg')] bg-cover bg-no-repeat p-6 md:h-[calc(100vh-var(--header-height))]`}
    >
      <Loading />
      <Hero />
      <FeatureContainer />
    </div>
  );
}
