import { SectionHeading } from '@/components/atoms/SectionHeading';
import { CalloutCard } from '@/components/molecules/CalloutCard';
import { ComponentCard } from '@/components/molecules/ComponentCard';
import { Hero } from '@/components/organisms/Hero';
import { NewsletterDemo } from '@/components/organisms/NewsletterDemo';
import { designTokens } from '@/data/tokens';

const componentLayers = [
  { name: 'Badge, Button, Input, SectionHeading', layer: 'Atoms', description: 'Primitive branded building blocks with direct, reusable semantics.' },
  { name: 'CalloutCard, ComponentCard, LogoMark', layer: 'Molecules', description: 'Small compositions that package content, status, and identity.' },
  { name: 'Hero, NewsletterDemo', layer: 'Organisms', description: 'Larger interface zones combining messaging, actions, and forms.' },
  { name: 'DocsPage', layer: 'Templates', description: 'The site template consumes the system itself to document the system.' },
];

const guides = [
  { title: 'Install', tone: 'red' as const, body: 'Install dependencies with npm install, then start the local docs site with npm run dev.' },
  { title: 'Run', tone: 'orange' as const, body: 'Use npm run build for production output and npm run preview to verify the GitHub Pages build locally.' },
  { title: 'Test', tone: 'yellow' as const, body: 'Run npm run test, npm run lint, and npm run test:a11y to keep component behavior and accessibility covered.' },
];

export function DocsPage() {
  return (
    <div className="cf-page">
      <Hero />
      <main className="cf-page__main">
        <section className="cf-section" id="overview">
          <SectionHeading
            eyebrow="System principles"
            title="Counterfeit follows Atomic Design, BEM, and inclusive defaults."
            description="Every public-facing primitive uses CSS variables, semantic HTML, visible focus, and white-on-black readability with warm highlight colors."
          />
          <div className="cf-grid cf-grid--three-up">
            {guides.map((guide) => (
              <CalloutCard key={guide.title} title={guide.title} tone={guide.tone}>
                <p>{guide.body}</p>
              </CalloutCard>
            ))}
          </div>
        </section>

        <section className="cf-section" id="install">
          <SectionHeading
            eyebrow="Install and run"
            title="Ship locally first, publish through GitHub Pages second."
            description="The docs site is the reference implementation. Teams can copy tokens, component patterns, and content models directly from the running site."
          />
          <div className="cf-code-block" aria-label="Installation commands">
            <pre>{`npm install\nnpm run dev\nnpm run build\nnpm run preview`}</pre>
          </div>
        </section>

        <section className="cf-section" id="tokens">
          <SectionHeading
            eyebrow="CSS variables"
            title="Design tokens stay documented, inspectable, and portable."
            description="Use the variables below as the contract for theming, spacing, typography, and focus treatment across implementations."
          />
          <div className="cf-token-table" role="table" aria-label="CSS variable reference table">
            <div className="cf-token-table__header" role="rowgroup">
              <div className="cf-token-table__row" role="row">
                <span role="columnheader">Variable</span>
                <span role="columnheader">Value</span>
                <span role="columnheader">Purpose</span>
              </div>
            </div>
            <div className="cf-token-table__body" role="rowgroup">
              {designTokens.map((token) => (
                <div className="cf-token-table__row" key={token.name} role="row">
                  <span role="cell">{token.name}</span>
                  <span role="cell">{token.value}</span>
                  <span role="cell">{token.description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cf-section" id="components">
          <SectionHeading
            eyebrow="Component library"
            title="A starter set of atomic components is included out of the box."
            description="Name blocks with cf-* BEM classes, keep modifiers explicit, and grow from atoms to templates without breaking the naming system."
          />
          <div className="cf-grid cf-grid--two-up">
            {componentLayers.map((component) => (
              <ComponentCard key={component.name} {...component} />
            ))}
          </div>
        </section>

        <section className="cf-section" id="template-demo">
          <SectionHeading
            eyebrow="Template demo"
            title="The documentation experience is built with Counterfeit itself."
            description="This makes the site both a style guide and a working component specimen for future implementations."
          />
          <NewsletterDemo />
        </section>

        <section className="cf-section" id="logo">
          <SectionHeading
            eyebrow="Logo direction"
            title="A logo should feel rebellious, legible, and reproducible."
            description="Start with a stark frame, a diagonal disruption mark, and a heavy wordmark. Explore one-color, inverse, and accent-strike variants for product and documentation use."
          />
          <ul className="cf-list">
            <li>Broken frame: a white square outline interrupted by a red slash.</li>
            <li>Stamp mark: monospaced COUNTERFEIT wordmark with yellow registration bars.</li>
            <li>Signal flare: black field, white C glyph, orange interference bands.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
