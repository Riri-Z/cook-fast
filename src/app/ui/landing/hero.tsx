import { ArrowRight, Utensils } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="m-auto mt-5 flex w-full flex-1 flex-col items-center gap-6">
      {/* LOGO  */}
      <div className="avatar avatar-placeholder">
        <div className="text-neutral-content bg-base-100 w-24 rounded-full">
          <Utensils className="text-amber-600" />
        </div>
      </div>
      <h1 data-testid="title" className="text-5xl font-bold text-white">
        Leftovers Magic
      </h1>

      {/* Card*/}
      <div className="card bg-base-100 card-border card-md w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Turn fridge leftovers into magic meals</h2>
          <p>
            Reduce food waste and discover delicious recipes with ingredients
            you already have at home.
          </p>
          <div className="card-actions justify-start">
            <Link
              className="btn btn-secondary mt-3 flex items-center text-white"
              href="/ingredient"
            >
              Start now
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
