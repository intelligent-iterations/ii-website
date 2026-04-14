import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("renders the launch narrative and structure", async ({ page }) => {
    await page.goto("/");

    const heading = page.getByTestId("home-heading");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("public front door");

    const description = page.getByTestId("home-description");
    await expect(description).toBeVisible();
    await expect(description).toContainText("stable static foundation");

    await expect(page.getByTestId("foundation-grid")).toBeVisible();
    await expect(page.getByTestId("release-flow")).toBeVisible();
    await expect(page.getByTestId("catalog-section")).toBeVisible();
  });

  test("has correct page title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/ii packages/);
  });

  test("shows all launch metrics and catalog tracks", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByTestId("launch-metric-card")).toHaveCount(3);
    await expect(page.getByTestId("foundation-card")).toHaveCount(3);
    await expect(page.getByTestId("release-step")).toHaveCount(2);
    await expect(page.getByTestId("catalog-track")).toHaveCount(3);
  });
});
