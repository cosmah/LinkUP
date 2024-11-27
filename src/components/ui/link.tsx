import { cn } from '@/lib/utils';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Link({ className, ...props }: LinkProps) {
  return (
    <a
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        className
      )}
      {...props}
    />
  );
}