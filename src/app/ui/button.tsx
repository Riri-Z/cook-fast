import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={clsx('btn cursor-pointer', className)}
    >
      {children}
    </button>
  );
}
