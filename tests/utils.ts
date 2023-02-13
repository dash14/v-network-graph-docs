import { Page } from "@playwright/test"

export async function waitForPreviewVNetworkGraph(page: Page) {
  await page.waitForTimeout(1000)
}

export async function openSourceTabs(page: Page) {
  const sourceTabs = page.getByRole("tab", { name: "Source" })
  await sourceTabs.evaluateAll(elements => {
    elements.forEach(element => (element as HTMLElement).click())
  })
}
