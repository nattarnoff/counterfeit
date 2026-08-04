# Counterfeit

Counterfeit is an accessibility-first design system and documentation site built for GitHub Pages. It uses Atomic Design principles, BEM naming conventions, CSS custom properties, and a white-on-black interface with red, orange, and yellow highlights.

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

- `src/components/atoms`: primitives
- `src/components/molecules`: composed blocks
- `src/components/organisms`: larger page sections
- `src/components/templates`: page templates using the system itself
- `src/data/tokens.ts`: CSS variable reference data
- `src/styles/index.css`: theme tokens and BEM class styling
- `src/content/ai`: AI guidance markdown files
- `.github/workflows`: CI, accessibility, and GitHub Pages deployment

## Documentation coverage

- Installation and local development
- CSS variable reference
- Atomic Design component overview
- AI guidance for Figma, Claude, and Copilot
- Logo direction and theme usage
