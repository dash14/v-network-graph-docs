import { test, expect } from "@playwright/test"
import config from "./config.json"

test("VRT: Reference", async ({ page }) => {
  await page.goto(config.baseUrl)
  await page.getByRole("link", { name: "Reference" }).click()

  expect(await page.screenshot(config.snapshot)).toMatchSnapshot(
    "reference.png",
    config.match
  )
})
