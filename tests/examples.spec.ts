import { test, expect } from "@playwright/test"
import config from "./config.json" assert { type: "json" }
import {
  freezeTime,
  openSourceTabs,
  resetRandomSeed,
  seedRandom,
  waitForImagesAndFonts,
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

const pages: Record<string, { name: string; url: string; mask?: string }> = {
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
    // A full-page screenshot resizes the viewport, and whether the events
    // logged for it make the capture is a race
    mask: ".event-logs",
  },
  misc: {
    name: "Miscellaneous",
    url: "examples/misc.html",
  },
  lite: {
    name: "Lite Component",
    url: "examples/lite.html",
  },
}

Object.entries(pages).forEach(([key, { name, url, mask }]) => {
  test.describe("VRT: Examples: Preview", () => {
    test(name, async ({ page, browserName }) => {
      // Moving dashes, timestamps, random labels and d3-force layouts keep
      // changing unless time is frozen and the random sequence is fixed
      await freezeTime(page)
      await seedRandom(page)

      await page.goto(`${config.baseUrl}examples/`)
      await resetRandomSeed(page)
      await page.locator("#VPContent .main").getByText(name).click()
      await expect(page.locator("#VPContent h1")).toContainText(name)

      // Let the browser lay out the page in real time before running timers
      await waitForPreviewVNetworkGraph(page)
      // Run the layouts long enough to settle
      await page.clock.runFor(10_000)
      // Apply what loading images and fonts scheduled, then let them paint
      await waitForImagesAndFonts(page)
      await page.clock.runFor(1_000)
      await page.waitForTimeout(500)

      expect(
        await page.screenshot({
          ...config.snapshot,
          // A fake clock does not drive CSS animations, so stop them instead
          animations: "disabled",
          // Give the masked box a fixed size so the mask does not depend on its content
          ...(mask && {
            mask: [page.locator(mask)],
            style: `${mask} { left: 10px !important; height: 66px; overflow: hidden; }`,
          }),
        })
      ).toMatchSnapshot(`examples-${key}.png`, {
        threshold: 0.5,
        // Firefox antialiases some node labels in one of two ways from run to run
        maxDiffPixels: browserName === "firefox" && key === "layout" ? 300 : 0,
      })
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
