import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { designTokens } from '../src/data/tokens.js';

const html = readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf8');

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
  it('includes the requested primary sections', () => {
    expect(html).toContain('href="#home"');
    expect(html).toContain('href="#components"');
    expect(html).toContain('href="#best-practices"');
    expect(html).toContain('href="#building-a-program"');
    expect(html).toContain('href="#contact"');
    expect(html).toContain('href="#contribute"');
    expect(html).toContain('href="#donate"');
  });

  it('documents components with tabs, aria guidance, and keyboard expectations', () => {
    expect(html.match(/role="tablist"/g)).toHaveLength(4);
    expect(html).toContain('Required ARIA');
    expect(html).toMatch(/keyboard expectations/i);
    expect(html).toContain('Warnings');
  });
});
