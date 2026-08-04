import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={`cf-button cf-button--${variant}`} type="button" {...props}>
      {children}
    </button>
  );
}
