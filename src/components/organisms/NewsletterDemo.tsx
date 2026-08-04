import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';

export function NewsletterDemo() {
  return (
    <form className="cf-newsletter" onSubmit={(event) => event.preventDefault()}>
      <div className="cf-newsletter__copy">
        <h3 className="cf-newsletter__title">Use the system inside the docs themselves.</h3>
        <p className="cf-newsletter__description">
          This template demonstrates atoms, molecules, and form states while staying accessible and readable in the dark theme.
        </p>
      </div>
      <div className="cf-newsletter__fields">
        <Input id="email" label="Email address" hint="Required for updates and release notes" placeholder="you@example.com" type="email" />
        <Button>Join updates</Button>
      </div>
    </form>
  );
}
