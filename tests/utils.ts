import { Page } from "@playwright/test"

export async function waitForPreviewVNetworkGraph(page: Page) {
  await page.waitForTimeout(1000)
}

const FROZEN_TIME = new Date("2026-01-01T00:00:00Z")

// Stops timers and seeds Math.random so animated examples render the same frame
export async function freezeTime(page: Page) {
  await page.addInitScript(() => {
    let seed = 1
    Math.random = () => {
      seed = (seed * 16807) % 2147483647
      return (seed - 1) / 2147483646
    }
  })
  await page.clock.install({ time: FROZEN_TIME })
  await page.clock.pauseAt(FROZEN_TIME)
}

export async function waitForImages(page: Page) {
  await page.waitForLoadState("networkidle")
  await page.evaluate(() =>
    Promise.all(
      Array.from(document.querySelectorAll("svg image"), element => {
        const image = new Image()
        image.src = new URL(
          (element as SVGImageElement).href.baseVal,
          location.href
        ).href
        return image.decode()
      })
    )
  )
}

export async function openSourceTabs(page: Page) {
  const sourceTabs = page.getByRole("tab", { name: "Source" })
  await sourceTabs.evaluateAll(elements => {
    elements.forEach(element => (element as HTMLElement).click())
  })
  await page.waitForTimeout(1000)
}
