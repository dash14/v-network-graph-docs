import { defineConfig, devices } from "@playwright/test"
export default defineConfig({
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  webServer: {
    command: "npm run docs:serve",
    port: 3001,
    reuseExistingServer: true,
  },
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  fullyParallel: true,
})
