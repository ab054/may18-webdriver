import {Builder, By, Key, until} from "selenium-webdriver";
import ChromeDriver from 'chromedriver'
import assert from "assert"

describe("links", () => {

    it("clicking on a link should open a new window", async () => {
        let driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('https://the-internet.herokuapp.com/windows');
            let locator = By.linkText("Click Here");
            let element = await driver.findElement(locator);
            await element.click();
            let handles = await driver.getAllWindowHandles();
            let firstWindow = handles[0];
            let secondWindow = handles[1];
            await driver.switchTo().window(secondWindow);
            let title = await driver.getTitle();
            assert.strictEqual(title, "New Window")
        } finally {
            await driver.quit();
        }
    });

});