import { XMarkIcon } from '@heroicons/react/16/solid';
import { Button } from '../../ui/button';

type Props = {
  value: string;
  action: (value: string) => void;
};

export function TagIngredient({ value, action }: Readonly<Props>) {
  return (
    <Button
      className="flex justify-around h-fit py-1  w-fit rounded-4xl bg-accent text-white"
      onClick={() => action(value)}
    >
      <p>{value}</p>
      <XMarkIcon className="h-5 w-5" />
    </Button>
  );
}
