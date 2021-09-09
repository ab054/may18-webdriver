import {Builder, By, Key, until} from "selenium-webdriver";
import chromedriver from "chromedriver";
import MainPage from "./pages/mainPage.js";
import ResultsPage from "./pages/resultsPage.js";
import * as assert from "assert";


describe('My first UI test', () => {

    it('browser test', async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        let mainPage = new MainPage(driver);
        let resultsPage = new ResultsPage(driver);
        let testParam01 = 'portnov computer school';
        try {
            await mainPage.open();
            await mainPage.typeQuery(testParam01);
            await resultsPage.waitForTitle(testParam01 + ' - Google Search');

            let title = await driver.getTitle();
            assert.ok(title.includes(testParam01));
            let number = await resultsPage.getResultsValue();
            assert.ok(number > 10000, "amount of results is less that expected");
        } finally {
            await driver.quit();
        }
    });

});
