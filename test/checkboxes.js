import {Builder, By, Key, until} from "selenium-webdriver";
import ChromeDriver from 'chromedriver'
import assert from "assert"

describe("checkboxes", () => {

    it("should be interactive", async () => {
        let driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('https://the-internet.herokuapp.com/checkboxes');

            let locator = By.xpath("//input[@type='checkbox']")

            let checkboxes = await driver.findElements(locator);
            let secondCheckBox = checkboxes[1];
            let isChecked = await secondCheckBox.getAttribute("checked");

            if (isChecked) {
                await secondCheckBox.click();
            }
            assert.strictEqual(await checkboxes[0].getAttribute("checked"), null);
        } finally {
            await driver.quit();
        }
    });

});