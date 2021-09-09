import {Builder, By, Key, until} from "selenium-webdriver";
import chromedriver from "chromedriver";
import MainPage from "./pages/mainPage.js";
import ResultsPage from "./pages/resultsPage.js";
import assert from "assert";


describe('My first UI test', () => {

    it('browser test', async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        let mainPage = new MainPage(driver);
        let resultsPage = new ResultsPage(driver);

        try {
            let queryValue = 'portnov computer school';

            await mainPage.open();
            await mainPage.typeQuery(queryValue);
            await resultsPage.waitForTitle(queryValue + ' - Google Search');
            let title = await driver.getTitle();

            assert.ok(title.includes(queryValue));

            let number = await resultsPage.getResults();

            assert.ok(number > 10000)
        } finally {
            await driver.quit();
        }
    });

});
