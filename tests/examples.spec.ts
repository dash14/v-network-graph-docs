import { test, expect } from "@playwright/test"
import config from "./config.json"

test("VRT: Examples", async ({ page }) => {
  await page.goto(config.baseUrl)
  await page.locator(".home-hero").getByRole("link", { name: "Examples" }).click()

  expect(await page.screenshot(config.snapshot)).toMatchSnapshot(
    "examples.png",
    config.match
  )
})
