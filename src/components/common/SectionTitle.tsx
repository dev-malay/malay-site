import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-white font-thin underline decoration-zinc-700 underline-offset-4  ">
      {children}
    </h2>
  );
}
