(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[[`--cf-color-bg`,`#050505`,`Primary page background.`],[`--cf-color-surface`,`#111111`,`Elevated panels and cards.`],[`--cf-color-surface-strong`,`#171717`,`Form controls and stronger surfaces.`],[`--cf-color-text`,`#f5f5f5`,`Primary readable text.`],[`--cf-color-muted`,`#c9c9c9`,`Supporting text and labels.`],[`--cf-color-border`,`#2e2e2e`,`Subtle dividers and field borders.`],[`--cf-color-red`,`#ff4d4f`,`Urgent accents and alerts.`],[`--cf-color-orange`,`#ff8c42`,`Warm highlight and callouts.`],[`--cf-color-yellow`,`#ffd84d`,`Attention states and badges.`],[`--cf-space-xs`,`0.25rem`,`Tight spacing.`],[`--cf-space-sm`,`0.5rem`,`Small spacing.`],[`--cf-space-md`,`1rem`,`Base spacing.`],[`--cf-space-lg`,`1.5rem`,`Large spacing.`],[`--cf-space-xl`,`2.5rem`,`Section spacing.`],[`--cf-space-2xl`,`4rem`,`Large section spacing.`],[`--cf-radius-sm`,`0.25rem`,`Small radius.`],[`--cf-radius-md`,`0.5rem`,`Default radius.`],[`--cf-radius-lg`,`1rem`,`Large radius.`],[`--cf-shadow-focus`,`0 0 0 3px rgba(255, 216, 77, 0.45)`,`Accessible focus ring.`],[`--cf-font-body`,`'Inter', 'Segoe UI', sans-serif`,`Body font stack.`],[`--cf-font-display`,`'Space Grotesk', 'Arial Black', sans-serif`,`Display font stack.`]].map(([e,t,n])=>`
      <tr class="cf-token-table__row">
        <th scope="row">${e}</th>
        <td><code>${t}</code></td>
        <td>${n}</td>
      </tr>`).join(``),t=[{layer:`Atom`,name:`Badge`,description:`Short status text for labels, categories, and states.`,commands:`Not keyboard interactive.`,aria:`Use plain text in a semantic container. No ARIA needed.`,js:`No JavaScript required.`,usage:`<span class="cf-badge cf-badge--red">Beta</span>`,demo:`
      <div class="cf-demo-badges" aria-label="Badge examples">
        <span class="cf-badge cf-badge--red">Critical</span>
        <span class="cf-badge cf-badge--orange">Preview</span>
        <span class="cf-badge cf-badge--yellow">New</span>
      </div>`},{layer:`Atom`,name:`Button`,description:`Primary and secondary actions using the native button element.`,commands:`Tab moves focus. Enter and Space activate the button.`,aria:`Use the native <button>. Add aria-pressed only for toggle buttons.`,js:`const button = document.querySelector("button");
button.addEventListener("click", handleAction);`,usage:`<button class="cf-button cf-button--primary" type="button">Save</button>`,demo:`
      <div class="cf-demo-actions">
        <button class="cf-button cf-button--primary" type="button" data-demo-button="primary">Primary action</button>
        <button class="cf-button cf-button--secondary" type="button" data-demo-button="secondary">Secondary action</button>
      </div>
      <p class="cf-form-status" data-button-status aria-live="polite">Choose an action to preview button behavior.</p>`},{layer:`Atom`,name:`Input`,description:`Single-line text entry with a visible label and hint text.`,commands:`Tab moves focus. Standard text editing keys follow browser defaults.`,aria:`Connect hint text with aria-describedby when extra guidance is present.`,js:`const input = document.querySelector("#demo-name");
input.addEventListener("input", updatePreview);`,usage:`<label class="cf-field"><span class="cf-field__label">Name</span><input class="cf-field__control" type="text" /></label>`,demo:`
      <label class="cf-field" for="demo-name">
        <span class="cf-field__label">Display name</span>
        <span class="cf-field__hint" id="demo-name-hint">Use aria-describedby to announce supportive instructions.</span>
        <input class="cf-field__control" id="demo-name" name="demo-name" type="text" aria-describedby="demo-name-hint demo-name-status" />
      </label>
      <p class="cf-form-status" id="demo-name-status" aria-live="polite">Start typing to see the input event update.</p>`},{layer:`Atom`,name:`SectionHeading`,description:`Eyebrow, heading, and supporting text for section intros.`,commands:`Not keyboard interactive.`,aria:`Reference the heading with aria-labelledby on the parent section when useful.`,js:`No JavaScript required.`,usage:`<section aria-labelledby="example-title">...</section>`,demo:`
      <div class="cf-section-heading">
        <p class="cf-section-heading__eyebrow">Example section</p>
        <p class="cf-component-card__title" id="demo-section-heading">Portable heading block</p>
        <p class="cf-section-heading__description cf-showcase-copy">Use this pattern to introduce content with a stable document outline.</p>
      </div>`},{layer:`Molecule`,name:`CalloutCard`,description:`Highlighted content block for key notes, alerts, or guidance.`,commands:`Not keyboard interactive unless you place interactive children inside it.`,aria:`Use semantic headings and body text. Add role="note" only if needed by context.`,js:`No JavaScript required.`,usage:`<article class="cf-callout cf-callout--orange">...</article>`,demo:`
      <div class="cf-callout cf-callout--orange">
        <p class="cf-callout__title"><span class="cf-badge cf-badge--orange">Heads up</span></p>
        <div class="cf-callout__body"><p class="cf-showcase-copy">Callouts help people scan the page for important notes.</p></div>
      </div>`},{layer:`Molecule`,name:`ComponentCard`,description:`Catalog card that groups a component name, layer, and summary.`,commands:`Not keyboard interactive unless linked or buttonized intentionally.`,aria:`Keep the heading semantic. No extra ARIA is needed for static cards.`,js:`No JavaScript required.`,usage:`<article class="cf-component-card">...</article>`,demo:`
      <article class="cf-component-card">
        <p class="cf-component-card__layer">Molecule</p>
        <p class="cf-component-card__title">ComponentCard</p>
        <p class="cf-component-card__description">This card presents structured metadata for the docs catalog.</p>
      </article>`},{layer:`Molecule`,name:`LogoMark`,description:`Brand link with a framed icon and wordmark.`,commands:`Tab moves focus. Enter activates the link.`,aria:`Use aria-label when the visible logo treatment does not fully convey the destination.`,js:`No JavaScript required.`,usage:`<a class="cf-logo" href="#top" aria-label="Counterfeit home">...</a>`,demo:`
      <a class="cf-logo" href="#components" aria-label="Jump to components showcase">
        <span class="cf-logo__frame" aria-hidden="true"><span class="cf-logo__slash"></span></span>
        <span class="cf-logo__wordmark">Counterfeit</span>
      </a>`},{layer:`Organism`,name:`Navigation`,description:`Primary site navigation made from a nav landmark and link list.`,commands:`Tab moves between links. Enter activates the focused link.`,aria:`Apply aria-label to distinguish the navigation landmark when there are multiple nav regions.`,js:`No JavaScript required.`,usage:`<div class="cf-nav"><ul class="cf-nav__list"><li><a href="#badge-component">Badge</a></li></ul></div>`,demo:`
      <div class="cf-nav cf-demo-nav">
        <ul class="cf-nav__list"><li><a href="#badge-component">Badge</a></li><li><a href="#button-component">Button</a></li><li><a href="#newsletterdemo-component">Newsletter</a></li></ul>
      </div>`},{layer:`Organism`,name:`Hero`,description:`Top-level page introduction with message and related actions.`,commands:`Tab moves through any links or buttons included in the hero.`,aria:`Name the section with aria-labelledby when the hero acts as a landmarked section.`,js:`No JavaScript required beyond any child control behaviors.`,usage:`<div class="cf-hero"><h1>Hero title</h1><p>Summary</p></div>`,demo:`
      <div class="cf-demo-hero">
        <p><span class="cf-badge cf-badge--yellow">Featured</span></p>
        <p class="cf-hero__title cf-demo-hero__title" id="demo-hero-title">Hero content introduces a page or release clearly.</p>
        <p class="cf-hero__summary cf-demo-hero__summary">Pair a direct headline with supporting body copy and clear actions.</p>
        <div class="cf-hero__actions">
          <a class="cf-button cf-button--primary" href="#install">Primary link</a>
          <button class="cf-button cf-button--secondary" type="button" data-demo-button="hero">Hero button</button>
        </div>
      </div>`},{layer:`Organism`,name:`NewsletterDemo`,description:`Progressively enhanced form demo with validation feedback and live status text.`,commands:`Tab moves through the form. Enter submits. Standard input editing keys apply.`,aria:`Use aria-describedby for hints and status text, plus aria-live="polite" for submission feedback.`,js:'form.addEventListener("submit", handleSubmit);\nstatus.textContent = `Demo subscription captured for ${email}.`;',usage:`<form class="cf-newsletter__form" aria-describedby="status-id">...</form>`,demo:`
      <div class="cf-newsletter">
        <div class="cf-newsletter__copy">
          <h3 class="cf-newsletter__title" id="newsletter-demo-heading">Newsletter form demo</h3>
          <p class="cf-newsletter__description cf-showcase-copy">This demo shows the full HTML, JS behavior, keyboard support, and ARIA references working together.</p>
        </div>
        <form class="cf-newsletter__form" data-demo-form>
          <div class="cf-newsletter__fields">
            <label class="cf-field" for="email">
              <span class="cf-field__label">Email address</span>
              <span class="cf-field__hint" id="email-hint">Required for updates and release notes</span>
              <input class="cf-field__control" id="email" name="email" type="email" autocomplete="email" aria-describedby="email-hint form-status" required />
            </label>
            <button class="cf-button cf-button--primary" type="submit">Join updates</button>
          </div>
          <p class="cf-form-status" id="form-status" aria-live="polite"></p>
        </form>
      </div>`}].map(({layer:e,name:t,description:n,commands:r,aria:i,js:a,usage:o,demo:s})=>`
        <article class="cf-showcase-card" id="${t.toLowerCase().replace(/[^a-z0-9]+/g,`-`)}-component">
          <div class="cf-showcase-card__header">
            <div>
              <p class="cf-component-card__layer">${e}</p>
              <h2 class="cf-component-card__title">${t}</h2>
            </div>
            <p class="cf-component-card__description">${n}</p>
          </div>
          <div class="cf-showcase-card__demo">
            <div class="cf-showcase-card__demo-surface">
              ${s}
            </div>
          </div>
          <dl class="cf-showcase-card__meta">
            <div>
              <dt>Usage</dt>
              <dd><pre><code>${o}</code></pre></dd>
            </div>
            <div>
              <dt>JavaScript</dt>
              <dd><pre><code>${a}</code></pre></dd>
            </div>
            <div>
              <dt>Keyboard</dt>
              <dd>${r}</dd>
            </div>
            <div>
              <dt>ARIA</dt>
              <dd>${i} Reference: W3C APG and native HTML semantics.</dd>
            </div>
          </dl>
        </article>`).join(``),n=document.querySelector(`#root`);n.innerHTML=`
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
      <section class="cf-section" id="tokens" aria-labelledby="tokens-title"><div class="cf-section-heading"><p class="cf-section-heading__eyebrow">CSS variables</p><h2 class="cf-section-heading__title" id="tokens-title">Design tokens stay documented, inspectable, and portable.</h2><p class="cf-section-heading__description">Use the variables below as the contract for theming, spacing, typography, and focus treatment across implementations.</p></div><div class="cf-table-wrap"><table class="cf-token-table"><caption class="cf-visually-hidden">CSS variable reference table</caption><thead><tr class="cf-token-table__row"><th scope="col">Variable</th><th scope="col">Value</th><th scope="col">Purpose</th></tr></thead><tbody>${e}</tbody></table></div></section>
      <section class="cf-section" id="components" aria-labelledby="components-title"><div class="cf-section-heading"><p class="cf-section-heading__eyebrow">Component library</p><h2 class="cf-section-heading__title" id="components-title">Every shipped component is displayed with appearance, behavior, usage, keyboard support, and ARIA notes.</h2><p class="cf-section-heading__description">Demo surfaces use a white background with black text, borders, and the key commands and ARIA guidance people need to implement each pattern.</p></div><div class="cf-showcase-grid">${t}</div></section>
      <section class="cf-section" id="guidance" aria-labelledby="guidance-title"><div class="cf-section-heading"><p class="cf-section-heading__eyebrow">Portable usage</p><h2 class="cf-section-heading__title" id="guidance-title">Components are intended to drop into any system.</h2><p class="cf-section-heading__description">Prefer native elements first, add ARIA only when native semantics cannot express the interaction, and keep JS as progressive enhancement.</p></div><ul class="cf-list"><li>Use native buttons, links, forms, lists, headings, and tables before adding roles.</li><li>Keep behavior separate from markup so components can be copied into any build system.</li><li>Reference the W3C APG for keyboard patterns when a component introduces a custom interaction.</li></ul></section>
      <section class="cf-section" id="logo" aria-labelledby="logo-title"><div class="cf-section-heading"><p class="cf-section-heading__eyebrow">Logo direction</p><h2 class="cf-section-heading__title" id="logo-title">A logo should feel rebellious, legible, and reproducible.</h2><p class="cf-section-heading__description">Start with a stark frame, a diagonal disruption mark, and a heavy wordmark.</p></div><ul class="cf-list"><li>Broken frame: a white square outline interrupted by a red slash.</li><li>Stamp mark: monospaced COUNTERFEIT wordmark with yellow registration bars.</li><li>Signal flare: black field, white C glyph, orange interference bands.</li></ul></section>
    </main>
  </div>
`;var r=document.querySelector(`[data-demo-form]`),i=document.querySelector(`#form-status`),a=document.querySelector(`#demo-name`),o=document.querySelector(`#demo-name-status`),s=document.querySelector(`[data-button-status]`),c=document.querySelectorAll(`[data-demo-button]`);r&&i&&r.addEventListener(`submit`,e=>{e.preventDefault();let t=r.querySelector(`#email`);if(t instanceof HTMLInputElement){if(!t.validity.valid){i.textContent=`Enter a valid email address before submitting.`;return}i.textContent=`Demo subscription captured for ${t.value}.`,r.reset()}}),a instanceof HTMLInputElement&&o&&a.addEventListener(`input`,()=>{o.textContent=a.value?`Preview value: ${a.value}`:`Start typing to see the input event update.`}),s&&c.length>0&&c.forEach(e=>{e.addEventListener(`click`,()=>{s.textContent=`${e.textContent} activated.`})});