import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("renders heading and description", async ({ page }) => {
    await page.goto("/");

    const heading = page.getByTestId("home-heading");
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText("ii packages");

    const description = page.getByTestId("home-description");
    await expect(description).toBeVisible();
    await expect(description).toContainText("Open-source packages by ii");
  });

  test("has correct page title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/ii packages/);
  });
});
