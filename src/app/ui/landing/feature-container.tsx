import { ChefHat, Recycle, Salad } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../button';
import FeatureCard from './feature-card';

export default function FeatureContainer() {
  const router = useRouter();

  const handleNavigateHome = () => {
    return router.push('/ingredient');
  };

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
      <h1 className="text-4xl font-bold text-white">How It Works</h1>
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
      <Button onClick={handleNavigateHome} className="btn-secondary text-white">
        Get started
      </Button>
    </main>
  );
}
