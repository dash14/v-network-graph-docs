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
    Object.assign(window, { resetRandomSeed: () => (seed = 1) })
  })
  await page.clock.pauseAt(FROZEN_TIME)
}

// Pages reached by client-side navigation would otherwise get whatever is left
// of the sequence
export async function resetRandomSeed(page: Page) {
  await page.evaluate(() =>
    (window as unknown as { resetRandomSeed: () => void }).resetRandomSeed()
  )
}

export async function waitForImagesAndFonts(page: Page) {
  await page.evaluate(() =>
    Promise.all([
      document.fonts.ready,
      ...Array.from(document.querySelectorAll("svg image"), element => {
        const image = new Image()
        image.src = new URL(
          (element as SVGImageElement).href.baseVal,
          location.href
        ).href
        // A broken image shows up in the screenshot diff instead
        return image.decode().catch(() => {})
      }),
    ])
  )
}

export async function openSourceTabs(page: Page) {
  const sourceTabs = page.getByRole("tab", { name: "Source" })
  await sourceTabs.evaluateAll(elements => {
    elements.forEach(element => (element as HTMLElement).click())
  })
  await page.waitForTimeout(1000)
}
