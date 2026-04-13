import { test } from "@playwright/test";
import path from "path";

const screenshotDir = path.join(__dirname, "screenshots");

test.describe("Screenshots", () => {
  test("home page", async ({ page }, testInfo) => {
    await page.goto("/");
    await page.getByTestId("home-page").waitFor();
    await page.screenshot({
      path: path.join(
        screenshotDir,
        `home-${testInfo.project.name}.png`
      ),
      fullPage: true,
    });
  });
});
