import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: 'app.a11y.spec.js',
  use: {
    baseURL: 'http://127.0.0.1:4173/counterfeit/',
    headless: true,
  },
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4173',
    port: 4173,
    reuseExistingServer: !process.env.CI,
  },
});
