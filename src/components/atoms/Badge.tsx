import type { ReactNode } from 'react';

type BadgeTone = 'red' | 'orange' | 'yellow';

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
}

export function Badge({ children, tone = 'yellow' }: BadgeProps) {
  return <span className={`cf-badge cf-badge--${tone}`}>{children}</span>;
}
