import { designTokens } from './data/tokens.js';
import './styles/index.css';

const tokenRows = designTokens
  .map(
    ([name, value, description]) => `
      <tr class="cf-token-table__row">
        <th scope="row">${name}</th>
        <td><code>${value}</code></td>
        <td>${description}</td>
      </tr>`,
  )
  .join('');

const componentRows = [
  ['Atoms', 'Badge, Button, Input, SectionHeading', 'Primitive, reusable building blocks with semantic HTML defaults.'],
  ['Molecules', 'CalloutCard, ComponentCard, LogoMark', 'Small compositions that package content, status, and identity.'],
  ['Organisms', 'Hero, Navigation, NewsletterDemo', 'Structured regions combining messaging, actions, and forms.'],
  ['Templates', 'Docs shell', 'The documentation template consumes the system itself.'],
]
  .map(
    ([layer, name, description]) => `
      <article class="cf-component-card">
        <p class="cf-component-card__layer">${layer}</p>
        <h3 class="cf-component-card__title">${name}</h3>
        <p class="cf-component-card__description">${description}</p>
      </article>`,
  )
  .join('');

const app = document.querySelector('#root');

app.innerHTML = `...`;

app.innerHTML = app.innerHTML.replace('...', `
  <a class="cf-skip-link" href="#main-content">Skip to content</a>
  <div class="cf-page">
    <header class="cf-site-header" role="banner">
      <div class="cf-page__main cf-site-header__inner">
        <a class="cf-logo" href="#top" aria-label="Counterfeit home">
          <span class="cf-logo__frame" aria-hidden="true"><span class="cf-logo__slash"></span></span>
          <span class="cf-logo__wordmark">Counterfeit</span>
        </a>
        <nav class="cf-nav" aria-label="Primary">
          <ul class="cf-nav__list">
            <li><a href="#install">Install</a></li>
            <li><a href="#tokens">Tokens</a></li>
            <li><a href="#components">Components</a></li>
            <li><a href="#logo">Logo</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <section class="cf-hero" id="top" aria-labelledby="hero-title">
      <div class="cf-page__main">
        <div class="cf-hero__content">
          <p><span class="cf-badge cf-badge--red">Accessibility-first system</span></p>
          <h1 class="cf-hero__title" id="hero-title">A semantic, portable design system built white-on-black for readable, inclusive interfaces.</h1>
          <p class="cf-hero__summary">Counterfeit uses semantic HTML, accessible CSS, and vanilla JavaScript so every component can drop into any stack without framework lock-in.</p>
          <div class="cf-hero__actions">
            <a class="cf-button cf-button--primary" href="#install">Install Counterfeit</a>
            <a class="cf-button cf-button--secondary" href="#components">Browse components</a>
          </div>
        </div>
      </div>
    </section>
    <main class="cf-page__main" id="main-content">
      <section class="cf-section" id="overview" aria-labelledby="overview-title">
        <div class="cf-section-heading">
          <p class="cf-section-heading__eyebrow">System principles</p>
          <h2 class="cf-section-heading__title" id="overview-title">Counterfeit follows Atomic Design, BEM, and inclusive defaults.</h2>
          <p class="cf-section-heading__description">Every public-facing primitive uses semantic HTML, visible focus, white-on-black readability, and ARIA only where native semantics are insufficient.</p>
        </div>
        <div class="cf-grid cf-grid--three-up">
          <article class="cf-callout cf-callout--red"><h3 class="cf-callout__title"><span class="cf-badge cf-badge--red">Install</span></h3><div class="cf-callout__body"><p>Install dependencies with npm install, then start the local docs site with npm run dev.</p></div></article>
          <article class="cf-callout cf-callout--orange"><h3 class="cf-callout__title"><span class="cf-badge cf-badge--orange">Run</span></h3><div class="cf-callout__body"><p>Use npm run build for production output and npm run preview to verify the GitHub Pages build locally.</p></div></article>
          <article class="cf-callout cf-callout--yellow"><h3 class="cf-callout__title"><span class="cf-badge cf-badge--yellow">Test</span></h3><div class="cf-callout__body"><p>Run npm run test, npm run lint, and npm run test:a11y to keep semantic behavior and accessibility covered.</p></div></article>
        </div>
      </section>
      <section class="cf-section" id="install" aria-labelledby="install-title"><div class="cf-section-heading"><p class="cf-section-heading__eyebrow">Install and run</p><h2 class="cf-section-heading__title" id="install-title">Ship locally first, publish through GitHub Pages second.</h2><p class="cf-section-heading__description">The docs site is the reference implementation for portable HTML, CSS, and JavaScript components.</p></div><div class="cf-code-block"><pre><code>npm install
npm run dev
npm run build
npm run preview</code></pre></div></section>
      <section class="cf-section" id="tokens" aria-labelledby="tokens-title"><div class="cf-section-heading"><p class="cf-section-heading__eyebrow">CSS variables</p><h2 class="cf-section-heading__title" id="tokens-title">Design tokens stay documented, inspectable, and portable.</h2><p class="cf-section-heading__description">Use the variables below as the contract for theming, spacing, typography, and focus treatment across implementations.</p></div><div class="cf-table-wrap"><table class="cf-token-table"><caption class="cf-visually-hidden">CSS variable reference table</caption><thead><tr class="cf-token-table__row"><th scope="col">Variable</th><th scope="col">Value</th><th scope="col">Purpose</th></tr></thead><tbody>${tokenRows}</tbody></table></div></section>
      <section class="cf-section" id="components" aria-labelledby="components-title"><div class="cf-section-heading"><p class="cf-section-heading__eyebrow">Component library</p><h2 class="cf-section-heading__title" id="components-title">A starter set of atomic components is included out of the box.</h2><p class="cf-section-heading__description">All components are authored as portable HTML, CSS, and vanilla JavaScript patterns with BEM class names.</p></div><div class="cf-grid cf-grid--two-up">${componentRows}</div></section>
      <section class="cf-section" id="template-demo" aria-labelledby="template-demo-title"><div class="cf-section-heading"><p class="cf-section-heading__eyebrow">Template demo</p><h2 class="cf-section-heading__title" id="template-demo-title">The documentation experience is built with Counterfeit itself.</h2><p class="cf-section-heading__description">This demo uses a semantic form and lightweight progressive enhancement instead of framework state.</p></div><section class="cf-newsletter" aria-labelledby="newsletter-title"><div class="cf-newsletter__copy"><h3 class="cf-newsletter__title" id="newsletter-title">Use the system inside the docs themselves.</h3><p class="cf-newsletter__description">This template demonstrates atoms, molecules, and form states while staying accessible and readable in the dark theme.</p></div><form class="cf-newsletter__form" data-demo-form aria-label="Newsletter demo form"><div class="cf-newsletter__fields"><label class="cf-field" for="email"><span class="cf-field__label">Email address</span><span class="cf-field__hint" id="email-hint">Required for updates and release notes</span><input class="cf-field__control" id="email" name="email" type="email" autocomplete="email" aria-describedby="email-hint form-status" required /></label><button class="cf-button cf-button--primary" type="submit">Join updates</button></div><p class="cf-form-status" id="form-status" aria-live="polite"></p></form></section></section>
      <section class="cf-section" id="guidance" aria-labelledby="guidance-title"><div class="cf-section-heading"><p class="cf-section-heading__eyebrow">Portable usage</p><h2 class="cf-section-heading__title" id="guidance-title">Components are intended to drop into any system.</h2><p class="cf-section-heading__description">Prefer native elements first, add ARIA only when native semantics cannot express the interaction, and keep JS as progressive enhancement.</p></div><ul class="cf-list"><li>Use native buttons, links, forms, lists, headings, and tables before adding roles.</li><li>Keep behavior separate from markup so components can be copied into any build system.</li><li>Use the cf-block__element--modifier naming pattern for portability and predictability.</li></ul></section>
      <section class="cf-section" id="logo" aria-labelledby="logo-title"><div class="cf-section-heading"><p class="cf-section-heading__eyebrow">Logo direction</p><h2 class="cf-section-heading__title" id="logo-title">A logo should feel rebellious, legible, and reproducible.</h2><p class="cf-section-heading__description">Start with a stark frame, a diagonal disruption mark, and a heavy wordmark.</p></div><ul class="cf-list"><li>Broken frame: a white square outline interrupted by a red slash.</li><li>Stamp mark: monospaced COUNTERFEIT wordmark with yellow registration bars.</li><li>Signal flare: black field, white C glyph, orange interference bands.</li></ul></section>
    </main>
  </div>
`);

const demoForm = document.querySelector('[data-demo-form]');
const formStatus = document.querySelector('#form-status');

if (demoForm && formStatus) {
  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = demoForm.querySelector('#email');

    if (!(emailInput instanceof HTMLInputElement)) {
      return;
    }

    if (!emailInput.validity.valid) {
      formStatus.textContent = 'Enter a valid email address before submitting.';
      return;
    }

    formStatus.textContent = `Demo subscription captured for ${emailInput.value}.`;
    demoForm.reset();
  });
}
