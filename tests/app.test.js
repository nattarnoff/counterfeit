import { describe, expect, it } from 'vitest';
import { designTokens } from '../src/data/tokens.js';

describe('design tokens', () => {
  it('includes highlight colors and focus treatment', () => {
    const names = designTokens.map(([name]) => name);
    expect(names).toContain('--cf-color-red');
    expect(names).toContain('--cf-color-orange');
    expect(names).toContain('--cf-color-yellow');
    expect(names).toContain('--cf-shadow-focus');
  });
});
