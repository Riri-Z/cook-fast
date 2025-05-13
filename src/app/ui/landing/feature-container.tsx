import { ChefHat, Recycle, Salad } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '../button';
import FeatureCard from './feature-card';

export default function FeatureContainer() {
  const { theme } = useTheme();
  const CONTENT = [
    {
      title: 'Add Ingredients',
      id: 1,
      description: "Tell us what's in your fridge and pantry",
      logo: <Salad size={32} color={theme === 'dark' ? 'orange' : 'green'} />,
    },
    {
      title: 'Discover Recipes',
      id: 2,
      description: 'Get personalized recipe recommendations',
      logo: <ChefHat size={32} color={theme === 'dark' ? 'orange' : 'green'} />,
    },
    {
      title: 'Reduce Waste',
      id: 3,
      description: 'Use what you have and minimize food waste',
      logo: <Recycle size={32} color={theme === 'dark' ? 'orange' : 'green'} />,
    },
  ];
  return (
    <main className="my-8 flex flex-col items-center gap-10">
      <h1 className="text-4xl font-bold">How It Works</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {CONTENT.map((e) => {
          return (
            <FeatureCard
              key={e.id}
              id={e.id}
              title={e.title}
              description={e.description}
              logo={e.logo}
            />
          );
        })}
      </div>
      <Button className="btn-secondary text-white">Get started</Button>
    </main>
  );
}
