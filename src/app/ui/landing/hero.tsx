import { ArrowRight, Utensils } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../button';

export default function Hero() {
  const router = useRouter();

  const handleNavigate = () => {
    return router.push('/ingredient');
  };

  return (
    <section className="m-auto flex w-full flex-col items-center gap-5">
      {/* LOGO  */}
      <div className="avatar avatar-placeholder">
        <div className="text-neutral-content w-24 rounded-full bg-white">
          <Utensils className="text-amber-600" />
        </div>
      </div>
      <h1 className="text-5xl font-bold text-white">Leftovers Magic</h1>
      {/* Card*/}
      <div className="card">
        <div className="card card-border w-96 bg-white text-black">
          <div className="card-body">
            <h2 className="card-title">
              Turn fridge leftovers into magic meals
            </h2>
            <p>
              Reduce food waste and discover delicious recipes with ingredients
              you already have at home.
            </p>
            <div className="card-actions justify-start">
              <Button
                className="btn-secondary text-white flex items-center"
                onClick={handleNavigate}
              >
                Start Now
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
