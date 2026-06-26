import { test, expect } from 'playwright/test';

test('it has title', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await page.waitForTimeout(5000);
})