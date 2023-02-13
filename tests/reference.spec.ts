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

const pages = {
  "props": {
    name: "Props",
  },
  "configurations": {
    name: "Configurations",
  },
  "methods": {
    name: "Methods",
  },
  "events": {
    name: "Events",
  },
}

Object.entries(pages).forEach(([key, { name }]) => {
  test(`VRT: Reference: ${name}`, async ({ page }) => {
    await page.goto(`${config.baseUrl}reference/`)
    await page.locator(".content").getByRole("link", { name }).click()

    expect(await page.screenshot(config.snapshot)).toMatchSnapshot(
      `reference-${key}.png`,
      config.match
    )
  })
})
