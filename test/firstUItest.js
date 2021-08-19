import {Builder, By, Key, until} from "selenium-webdriver";
import chromedriver from "chromedriver";

describe('My first UI test', () => {

    it('browser test', async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('http://www.google.com/');
            await driver.findElement(By.name('q')).sendKeys('portnov computer school', Key.ENTER);
            await driver.wait(driver.wait(until.titleIs('portnov computer school - Google Search'), 1000));
        } finally {
            await driver.quit();
        }
    });

});
