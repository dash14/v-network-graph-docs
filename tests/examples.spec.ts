import { test, expect } from "@playwright/test"
import config from "./config.json" assert { type: "json" }
import {
  freezeTime,
  openSourceTabs,
  waitForImages,
  waitForPreviewVNetworkGraph,
} from "./utils"

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

// Moving dashes, timestamps, random labels and d3-force layouts keep changing
// unless time is frozen
const animated = ["layout", "labels", "appearance", "event", "misc"]

Object.entries(pages).forEach(([key, { name, url }]) => {
  test.describe("VRT: Examples: Preview", () => {
    test(name, async ({ page }) => {
      const frozen = animated.includes(key)
      if (frozen) {
        await freezeTime(page)
      }

      await page.goto(`${config.baseUrl}examples/`)
      await page.locator("#VPContent .main").getByText(name).click()
      await expect(page.locator("#VPContent h1")).toContainText(name)

      if (frozen) {
        await waitForImages(page)
        // Run the layouts long enough to settle
        await page.clock.runFor(10_000)
        await waitForImages(page)
      } else {
        await waitForPreviewVNetworkGraph(page)
        await waitForImages(page)
        // Wait for transition to be stable.
        await page.waitForTimeout(1500)
      }

      expect(
        await page.screenshot({
          ...config.snapshot,
          // A fake clock does not drive CSS animations, so stop them instead
          animations: frozen ? "disabled" : "allow",
        })
      ).toMatchSnapshot(`examples-${key}.png`, { threshold: 0.5 })
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
