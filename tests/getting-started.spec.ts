import { test, expect } from "@playwright/test"
import config from "./config.json" assert { type: "json" }

test("VRT: Getting Started", async ({ page }) => {
  await page.goto(config.baseUrl)
  await page.locator(".VPHome").getByRole("link", { name: "Getting Started" }).click()

  await page.waitForSelector(".prev-next")

  expect(await page.screenshot(config.snapshot)).toMatchSnapshot(
    "getting-started.png",
    config.match
  )
})
