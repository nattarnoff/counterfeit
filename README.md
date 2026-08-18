# Counterfeit

Counterfeit is an accessibility-first documentation site built as a multipage static Jekyll site with semantic HTML, CSS custom properties, and vanilla JavaScript demos.

## Install

```bash
npm install
export PATH="$HOME/.local/share/gem/ruby/3.2.0/bin:$PATH"
bundle install --path vendor/bundle
```

## Run locally

```bash
export PATH="$HOME/.local/share/gem/ruby/3.2.0/bin:$PATH"
bundle exec jekyll serve
```

## Build

```bash
export PATH="$HOME/.local/share/gem/ruby/3.2.0/bin:$PATH"
bundle exec jekyll build
```

## Validate

```bash
npm run lint
npm run test
npm run build
npm run test:a11y
```

## System structure

- `_config.yml`: Jekyll site configuration and pretty permalink setup
- `_layouts/default.html`: shared site chrome and asset loading
- `_data/navigation.yml`: primary navigation page links
- `_data/components.yml`: component index data used by the component catalog
- `components/*/index.html`: one page per documented component or primitive
- `src/main.js`: progressive enhancement for demos and disclosure patterns
- `src/styles/index.css`: theme tokens, layout styling, and demo presentation

## Authoring rules

- Use semantic HTML first.
- Add ARIA only when native HTML cannot express the interaction.
- Keep JavaScript portable and framework-agnostic.
- Use `cf-block__element--modifier` naming for reusable components.
- Keep primary navigation as page-to-page links, not in-page section jumps.
