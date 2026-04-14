import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("renders the minimal hello world page", async ({ page }) => {
    await page.goto("/");

    const heading = page.getByTestId("home-heading");
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText("Hello World");

    const description = page.getByTestId("home-description");
    await expect(description).toBeVisible();
    await expect(description).toHaveText("ii packages");
  });

  test("has correct page title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/ii packages/);
  });

  test("renders a single page shell", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByTestId("home-page")).toBeVisible();
    await expect(page.getByTestId("home-heading")).toHaveCount(1);
    await expect(page.getByTestId("home-description")).toHaveCount(1);
  });
});
