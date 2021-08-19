import {Builder, By, Key, until} from "selenium-webdriver";
import ChromeDriver from 'chromedriver'

describe("", () => {

    it("", async () => {
        let driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('http://www.google.com/ncr');

            let locator02 = By.id('result-stats')
            let locator03 = By.className('class name');
            let locator04 = By.linkText('Elemental Selenium');
            let locator05 = By.partialLinkText('Elemental');

            let locator06 = By.tagName('a');
            let elementsArray = await driver.findElements(locator06);
            let firstLink = elementsArray[0];

            let locator07 = By.xpath('');
            let locator08 = By.xpath('/html/body/div[1]/div[2]/div[2]/div[1]/form/div[1]/div/div[1]/div/div/input[1]');
            let locator09 = By.xpath('//form/div[1]/div/div[1]/div/div/input[1]');
            let locator10 = By.xpath('//*[@name=\'username\']');
            let locator11 = By.xpath('//*[@name=\'username\'][@id=\'password\']');
            let locator12 = By.xpath('//*[@name=\'username\'][@id=\'password\']');
            let locator13 = By.xpath('//*[@attribute_name1=\'attribute_value1\' and @attribute_name2=\'attribute_value2’]');
            let locator14 = By.xpath('//*[@attribute_name1=\'attribute_value1\' or @attribute_name2=\'attribute_value2’]');
            let locator15 = By.xpath('//*[contains(@class,\'gTMtLb\')]');
            let locator16 = By.xpath('//*[text()=\' Login\']');
            let locator17 = By.xpath('//*[@id=\'LastName\']//preceding::input[@type=\'text\']\n')
            let locator18 = By.xpath('(//input[@type=\'text\'])[2]');
            let locator19 = By.xpath("//*[@id='FirstName']/following::input[@type='text']");
            let locator = By.name('q');

            let locatorWithName = By.xpath('//*[@name=\'q\']');
            let element = await driver.findElement(locatorWithName);
            element.sendKeys('Portnov School', Key.RETURN);
            await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        } finally {
            await driver.quit();
        }

    });

});