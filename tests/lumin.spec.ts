import { test, expect, type Page, Locator } from '@playwright/test';
import { LuminHomePage } from '../pages/goToLumin';


test('Go to Lumin', async ({ page }) => {
    const luminhomepage = new LuminHomePage(page);

    await luminhomepage.goto();
    await luminhomepage.getStarted();
    await luminhomepage.goSearch('bill pay');
});

// test('Lumin Bill Pay Screenshot', async ({ page }) => {

//     await page.goto('https://lumindigital.com/');
//     await expect(page).toHaveScreenshot("lumindigital.png"), {maxDiffPixels: 1000};
//     await page.locator('.elementor-icon').first().click();
//     await page.getByRole('searchbox', { name: 'Search for: Search for:' }).click();
//     await page.getByRole('searchbox', { name: 'Search for: Search for:' }).fill('bill pay');
//     await page.getByRole('searchbox', { name: 'Search for: Search for:' }).press('Enter');
//     await expect(page.getByText('Search Results for: bill pay')).toHaveScreenshot("lumindigitalbillpay.png"), {maxDiffPixels: 1000};
//     await page.getByRole('link', { name: 'Peer Pressure: Why P2P Payment Needs To Be in Your Plans', exact: true }).click();
//     await expect(page.getByText('Peer Pressure: Why P2P Payment Needs To Be in Your Plans')).toBeVisible();
//     await expect(page).toHaveScreenshot("P2P Payment article.png"), {maxDiffPixels: 1000};
// });

