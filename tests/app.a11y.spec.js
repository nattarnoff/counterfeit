import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('homepage renders semantic documentation', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('header[role="banner"]')).toBeVisible();
  await expect(page.getByRole('main')).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 1, name: /semantic, portable design system/i })).toBeVisible();
  await expect(page.getByRole('table')).toBeVisible();
  await expect(page.locator('[data-demo-form]')).toBeVisible();
});

test('homepage has no accessibility violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
