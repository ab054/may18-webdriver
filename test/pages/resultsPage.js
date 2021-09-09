import {By, until} from "selenium-webdriver";

export default class ResultsPage {

    driver;
    resultStats = By.id('result-stats');

    constructor(driver) {
        this.driver = driver;
    }

    async waitForTitle(queryValue) {
        await this.driver.wait(this.driver.wait(until.titleIs(queryValue), 1000));
    }

    async getResults() {
        let results = 0;
        let text = await this.driver.findElement(this.resultStats).getText();
        results = parseInt(text.split(' ')[1].replace(',', ''))
        return results;
    }

}