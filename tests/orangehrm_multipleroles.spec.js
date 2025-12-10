import { test, expect } from "@playwright/test";
import { orange } from "../POM/orange.page";
import data from '../testdata/orange.json'
import { loginAs } from "../helperFunctions/login";

/*

for (const user of data) {
  test(`Login Test - Role: ${user.role}`, async ({ page }) => {
    const obj_orange = new orange(page);

    await obj_orange.goto()
    await obj_orange.login(user.username, user.password);

    // Example validation:
    await expect(page.locator("#roleLabel")).toHaveText(user.role);
  });
}
  */

test("Admin login test", async ({ page }) => {
  await loginAs(page, "admin");
});


