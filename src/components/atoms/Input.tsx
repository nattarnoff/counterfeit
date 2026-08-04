import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  id: string;
}

export function Input({ label, hint, id, ...props }: InputProps) {
  return (
    <label className="cf-field" htmlFor={id}>
      <span className="cf-field__label">{label}</span>
      {hint ? <span className="cf-field__hint">{hint}</span> : null}
      <input className="cf-field__control" id={id} {...props} />
    </label>
  );
}
