import { ChefHat, Recycle, Salad } from 'lucide-react';
import FeatureCard from './feature-card';
import Link from 'next/link';

export default function FeatureContainer() {
  const CONTENT = [
    {
      title: 'Add Ingredients',
      id: 1,
      description: "Tell us what's in your fridge and pantry",
      logo: <Salad size={32} color="orange" />,
    },
    {
      title: 'Discover Recipes',
      id: 2,
      description: 'Get personalized recipe recommendations',
      logo: <ChefHat size={32} color="orange" />,
    },
    {
      title: 'Reduce Waste',
      id: 3,
      description: 'Use what you have and minimize food waste',
      logo: <Recycle size={32} color="orange" />,
    },
  ];

  return (
    <main className="m-auto flex flex-1 flex-col items-center gap-10">
      <h3 className="text-4xl font-bold text-white">How It Works</h3>
      <div className="flex flex-wrap justify-center gap-10">
        {CONTENT.map((e, i) => {
          return (
            <FeatureCard
              key={e.id}
              index={i}
              id={e.id}
              title={e.title}
              description={e.description}
              logo={e.logo}
            />
          );
        })}
      </div>
      <Link
        className="btn btn-secondary mt-3 flex items-center text-white"
        href="/ingredient"
      >
        Get started
      </Link>
    </main>
  );
}
