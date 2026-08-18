import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { designTokens } from '../src/data/tokens.js';

const repoRoot = process.cwd();
const homePage = readFileSync(path.resolve(repoRoot, 'index.html'), 'utf8');
const componentsIndex = readFileSync(path.resolve(repoRoot, 'components/index.html'), 'utf8');
const buttonPage = readFileSync(path.resolve(repoRoot, 'components/buttons/index.html'), 'utf8');
const componentData = readFileSync(path.resolve(repoRoot, '_data/components.yml'), 'utf8');
const config = readFileSync(path.resolve(repoRoot, '_config.yml'), 'utf8');

describe('design tokens', () => {
  it('includes highlight colors and focus treatment', () => {
    const names = designTokens.map(([name]) => name);
    expect(names).toContain('--cf-color-red');
    expect(names).toContain('--cf-color-orange');
    expect(names).toContain('--cf-color-yellow');
    expect(names).toContain('--cf-shadow-focus');
  });
});

describe('site architecture', () => {
  it('configures a multipage Jekyll site with the repo baseurl', () => {
    expect(config).toContain('baseurl: "/counterfeit"');
    expect(config).toContain('permalink: pretty');
  });

  it('uses page-to-page primary navigation for the requested top-level sections', () => {
    expect(homePage).toContain("{{ '/components/' | relative_url }}");
    expect(homePage).toContain("{{ '/best-practices/' | relative_url }}");
    expect(componentData).toContain('slug: accordion');
  });

  it('documents an individual component page with implementation, aria, and keystrokes sections', () => {
    expect(componentsIndex).toContain('Visit a dedicated page for every documented component and primitive');
    expect(buttonPage).toContain('Working demo');
    expect(buttonPage).toContain('HTML implementation');
    expect(buttonPage).toContain('JavaScript implementation');
    expect(buttonPage).toContain('Required ARIA');
    expect(buttonPage).toContain('Keystrokes expected');
  });
});
