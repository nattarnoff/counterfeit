import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('homepage renders core documentation', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: /white-on-black/i })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: /Design tokens stay documented/i })).toBeVisible();
});

test('homepage has no critical accessibility violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
