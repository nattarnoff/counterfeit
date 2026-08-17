import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('homepage renders the requested site architecture', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('header[role="banner"]')).toBeVisible();
  await expect(page.getByRole('banner').getByRole('navigation', { name: 'Primary' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Components', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Best Practices', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Building a Program', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { level: 1, name: /counterfeit organizes accessible component guidance/i })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: /visit individual component sections/i })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: /document the decisions that make components durable in production/i })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: /accessibility programs need both implementation patterns and governance structure/i })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: /reach the project through accessible, public collaboration channels/i })).toBeVisible();
});

test('component documentation tabs switch panels', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('tab', { name: 'Rendered' }).first()).toHaveAttribute('aria-selected', 'true');
  await page.getByRole('tab', { name: 'HTML' }).first().click();
  await expect(page.getByRole('tab', { name: 'HTML' }).first()).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('#button-panel-html')).toBeVisible();
  await expect(page.locator('#button-panel-html code')).toContainText('<button class="cf-button cf-button--primary" type="button">Save</button>');
  await expect(page.locator('#button-panel-rendered')).toBeHidden();
});

test('homepage has no accessibility violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
