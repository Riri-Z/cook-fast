'use client';

import Header from '@/components/header';
import FeatureContainer from './ui/landing/feature-container';
import Hero from './ui/landing/hero';

export default function Page() {
  return (
    <>
      <div
        className={`relative flex h-screen flex-col bg-[linear-gradient(to_bottom,rgba(49,84,44,0.8),rgba(16,71,52,0.8)),url('/diner-party.jpeg')] bg-cover bg-center bg-no-repeat`}
      >
        <Header />
        <Hero />
      </div>
      <FeatureContainer />
    </>
  );
}
