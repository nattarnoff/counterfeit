import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the documentation shell', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/system built white-on-black/i);
    expect(screen.getByRole('heading', { level: 2, name: /A starter set of atomic components/i })).toBeInTheDocument();
  });
});
