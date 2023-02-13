import { defineConfig } from '@playwright/test';
export default defineConfig({
  webServer: {
    command: "npm run docs:serve",
    port: 3001,
    reuseExistingServer: true,
  },
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
});
