import type { ReactNode } from 'react';
import { Badge } from '@/components/atoms/Badge';

interface CalloutCardProps {
  title: string;
  tone: 'red' | 'orange' | 'yellow';
  children: ReactNode;
}

export function CalloutCard({ title, tone, children }: CalloutCardProps) {
  return (
    <article className={`cf-callout cf-callout--${tone}`}>
      <Badge tone={tone}>{title}</Badge>
      <div className="cf-callout__body">{children}</div>
    </article>
  );
}
