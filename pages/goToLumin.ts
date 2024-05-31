import { Locator, expect, test, type Page } from '@playwright/test';
import { link } from 'fs';

export class LuminHomePage {
    readonly page: Page;
    readonly search: Locator;
    readonly searchBox: Locator;
    readonly keepReading: Locator;

    constructor(page: Page) {

        this.page = page;
        this.search = page.locator('.elementor-icon');
        this.searchBox = page.getByRole('searchbox', { name: 'Search for: Search for:' });
        this.keepReading = page.getByRole('link', { name: 'Peer Pressure: Why P2P Payment Needs To Be in Your Plans', exact: true });

    }

    async goto() {
        await this.page.goto('https://lumindigital.com/');

    }
    
    async getStarted(){
        await this.search.first().click();
    }

    async goSearch(wordsearch){
        await this.searchBox.click();
        await this.searchBox.fill(wordsearch);
        await this.page.keyboard.press('Enter');
        await expect(this.page.getByText('Search Results for: bill pay')).toHaveScreenshot("lumindigitalbillpay.png"), {maxDiffPixels: 20000};
    }

}