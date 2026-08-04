# Counterfeit

Counterfeit is an accessibility-first design system and documentation site built with semantic HTML, CSS custom properties, and vanilla JavaScript. It uses Atomic Design principles, BEM naming conventions, and a white-on-black interface with red, orange, and yellow highlights.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Validate

```bash
npm run lint
npm run test
npm run test:a11y
```

## System structure

- `index.html`: static semantic site template and full component showcase catalog
- `src/main.js`: progressive enhancement for interactive demos
- `src/data/tokens.js`: CSS variable reference data
- `src/styles/index.css`: theme tokens, BEM class styling, and white-background demo surfaces
- `src/content/ai`: AI guidance markdown files
- `.github/workflows`: CI, accessibility, and GitHub Pages deployment

## Component showcase

The docs homepage now displays every shipped component with:

- a live visual demo
- HTML usage snippets
- JavaScript behavior snippets
- keyboard command summaries
- ARIA guidance referencing the W3C APG and native semantics

## Authoring rules

- Use semantic HTML first.
- Add ARIA only when native HTML cannot express the interaction.
- Keep JavaScript portable and framework-agnostic.
- Use `cf-block__element--modifier` naming for reusable components.
- Ensure components can be copied into any system without React or other framework dependencies.
