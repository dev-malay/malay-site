import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'pill';
}

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-5 py-2 font-mono text-sm transition-all duration-200 cursor-pointer',
        variant === 'default' && 'border border-white hover:bg-zinc-900 hover:bg-opacity-50',
        variant === 'outline' && 'border border-zinc-700 hover:bg-zinc-900',
        variant === 'pill' && 'px-3 py-1 text-xs border border-zinc-700 text-zinc-500 hover:text-white hover:border-white hover:bg-zinc-900',
        className
      )}
      {...props}
    />
  );
}
