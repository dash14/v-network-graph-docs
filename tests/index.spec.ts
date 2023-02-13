import { test, expect } from "@playwright/test"
import config from "./config.json"

test("VRT: index", async ({ page }) => {
  await page.goto(config.baseUrl)

  expect(await page.screenshot(config.snapshot)).toMatchSnapshot(
    "index.png",
    config.match
  )
})
