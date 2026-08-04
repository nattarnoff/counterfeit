import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { LogoMark } from '@/components/molecules/LogoMark';

export function Hero() {
  return (
    <section className="cf-hero">
      <div className="cf-hero__content">
        <LogoMark />
        <Badge tone="red">Accessibility-first system</Badge>
        <h1 className="cf-hero__title">A black-on-white-resistant system built white-on-black for readable, inclusive interfaces.</h1>
        <p className="cf-hero__summary">
          Counterfeit is a GitHub Pages-ready design system with CSS variables, Atomic Design structure, BEM naming, and accessibility checks built into CI.
        </p>
        <div className="cf-hero__actions">
          <Button onClick={() => document.getElementById('install')?.scrollIntoView()}>Install Counterfeit</Button>
          <Button variant="secondary" onClick={() => document.getElementById('components')?.scrollIntoView()}>Browse components</Button>
        </div>
      </div>
    </section>
  );
}
