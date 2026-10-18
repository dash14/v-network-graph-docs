import { Page } from "@playwright/test"

export async function waitForPreviewVNetworkGraph(page: Page) {
  await page.waitForTimeout(1000)
}

const FROZEN_TIME = new Date("2026-01-01T00:00:00Z")

// Stops timers so animated examples render the same frame
export async function freezeTime(page: Page) {
  await page.clock.pauseAt(FROZEN_TIME)
}

// Replaces Math.random with a seeded sequence that resetRandomSeed restarts
export async function seedRandom(page: Page) {
  await page.addInitScript(() => {
    let seed = 1
    Math.random = () => {
      seed = (seed * 16807) % 2147483647
      return (seed - 1) / 2147483646
    }
    Object.assign(window, { resetRandomSeed: () => (seed = 1) })
  })
}

// Pages reached by client-side navigation would otherwise get whatever is left
// of the sequence
export async function resetRandomSeed(page: Page) {
  await page.evaluate(() =>
    (window as unknown as { resetRandomSeed: () => void }).resetRandomSeed()
  )
}

export async function waitForImagesAndFonts(page: Page) {
  await page.evaluate(() => {
    const svgImages = Array.from(document.querySelectorAll("svg image"), element => {
      const image = new Image()
      image.src = new URL(
        (element as SVGImageElement).href.baseVal,
        location.href
      ).href
      return image
    })
    return Promise.all([
      document.fonts.ready,
      ...[...document.images, ...svgImages].map(image =>
        // A broken image shows up in the screenshot diff instead
        image.decode().catch(() => {})
      ),
    ])
  })
}

export async function openSourceTabs(page: Page) {
  const sourceTabs = page.getByRole("tab", { name: "Source" })
  await sourceTabs.evaluateAll(elements => {
    elements.forEach(element => (element as HTMLElement).click())
  })
  await page.waitForTimeout(1000)
}
