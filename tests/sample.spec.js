import { test, expect, chromium } from '@playwright/test';

test('login and use logged-in page',  async () => {

  // 1️⃣ Launch browser manually
    const browser = await chromium.launch();
 

  // 2️⃣ Create a fresh context
    const context = await browser.newContext();

  // 3️⃣ Open a new page
    const page = await context.newPage();

  // 4️⃣ Do the login steps
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

  // 5️⃣ Verify login succeeded
    await expect(page).toHaveURL(/inventory.html/);

    })
