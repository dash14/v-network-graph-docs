import { test, expect } from "@playwright/test"
import config from "./config.json" assert { type: "json" }
import { openSourceTabs, waitForPreviewVNetworkGraph } from "./utils"

test("VRT: Examples", async ({ page }) => {
  await page.goto(config.baseUrl)
  await page.locator(".VPHome").getByRole("link", { name: "Examples" }).click()

  await page.waitForSelector(".prev-next")

  expect(await page.screenshot(config.snapshot)).toMatchSnapshot(
    "examples.png",
    config.match
  )
})

const pages = {
  basic: {
    name: "Basic Usage",
    url: "examples/basic.html",
  },
  layout: {
    name: "Layout / Positioning",
    url: "examples/layout.html",
  },
  operation: {
    name: "Operations on Graphs",
    url: "examples/operation.html",
  },
  labels: {
    name: "Labels",
    url: "examples/labels.html",
  },
  appearance: {
    name: "Appearance Customization",
    url: "examples/appearance.html",
  },
  paths: {
    name: "Paths",
    url: "examples/paths.html",
  },
  layers: {
    name: "Layers",
    url: "examples/layers.html",
  },
  event: {
    name: "Event Handling",
    url: "examples/event.html",
  },
  misc: {
    name: "Miscellaneous",
    url: "examples/misc.html",
  },
}

const loosely = [
  "appearance", // Ignore dash lines
  "event" // Ignore timestamp field for event handling example
]

Object.entries(pages).forEach(([key, { name, url }]) => {
  test.describe("VRT: Examples: Preview", () => {
    test(name, async ({ page }) => {
      await page.goto(`${config.baseUrl}examples/`)
      await page.locator("#VPContent .main").getByText(name).click()
      await waitForPreviewVNetworkGraph(page)

      if (key === "layout") {
        // Wait for layout to be stable.
        await page.waitForTimeout(3000)
      }

      // Ignore timestamp field for event handling example
      const threshold = loosely.includes(key) ? 0.8 : 0.5

      expect(await page.screenshot(config.snapshot)).toMatchSnapshot(
        `examples-${key}.png`,
        { threshold }
      )
    })
  })

  test.describe("VRT: Examples: Sources", () => {
    test.skip(
      ({ browserName }) => browserName === "firefox" && key == "appearance",
      "Skip huge screenshots as they cause protocol errors"
    )

    test(name, async ({ page }) => {
      await page.goto(`${config.baseUrl}${url}`)

      await openSourceTabs(page)

      const maxDiffPixelRatio = 0.1

      expect(await page.screenshot(config.snapshot)).toMatchSnapshot(
        `examples-${key}-sources.png`,
        { maxDiffPixelRatio }
      )
    })
  })
})
