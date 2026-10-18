import path from "node:path"
import { defineConfig, devices } from "@playwright/test"

// Keeps baselines in one place shared by every checkout, e.g. one directory per library version
const snapshotDir = process.env.VRT_SNAPSHOT_DIR

export default defineConfig({
  reporter: "html",
  snapshotPathTemplate: snapshotDir
    ? `${path.resolve(snapshotDir)}/{testFileName}-snapshots/{arg}{-projectName}{-snapshotSuffix}{ext}`
    : undefined,
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
    command: "pnpm run docs:serve",
    port: 3001,
    reuseExistingServer: true,
  },
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    // Examples print local times
    timezoneId: "UTC",
  },
  fullyParallel: true,
})
