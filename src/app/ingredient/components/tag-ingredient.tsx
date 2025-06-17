import { XMarkIcon } from '@heroicons/react/16/solid';
import { Button } from '../../ui/button';

type Props = {
  value: string;
  action: (value: string) => void;
};

export function TagIngredient({ value, action }: Readonly<Props>) {
  return (
    <Button
      data-testid="tag-ingredient"
      className="bg-accent flex h-fit w-fit justify-around rounded-4xl py-1 text-white"
      onClick={() => action(value)}
    >
      <p>{value}</p>
      <XMarkIcon className="h-5 w-5" />
    </Button>
  );
}
