import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('homepage renders the requested multipage site architecture', async ({ page }) => {
  await page.goto('/counterfeit/');

  await expect(page.getByRole('banner')).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Home', exact: true })).toHaveAttribute('href', '/counterfeit/');
  await expect(page.getByRole('link', { name: 'Components', exact: true })).toHaveAttribute('href', '/counterfeit/components/');
  await expect(page.getByRole('link', { name: 'Best Practices', exact: true })).toHaveAttribute('href', '/counterfeit/best-practices/');
  await expect(page.getByRole('heading', { level: 1, name: /counterfeit publishes accessible guidance as a collection of static jekyll pages/i })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: /each primary section is now its own static page/i })).toBeVisible();
});

test('component index and button page expose page-to-page references and working demo behavior', async ({ page }) => {
  await page.goto('/counterfeit/components/');

  await expect(page.getByRole('heading', { level: 1, name: /visit a dedicated page for every documented component and primitive/i })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Buttons' })).toBeVisible();

  await page.goto('/counterfeit/components/buttons/');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Save activated.')).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'Required ARIA' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'Keystrokes expected' })).toBeVisible();
});

test('homepage and a component page have no accessibility violations', async ({ page }) => {
  await page.goto('/counterfeit/');
  const homeResults = await new AxeBuilder({ page }).analyze();
  expect(homeResults.violations).toEqual([]);

  await page.goto('/counterfeit/components/buttons/');
  const buttonResults = await new AxeBuilder({ page }).analyze();
  expect(buttonResults.violations).toEqual([]);
});
