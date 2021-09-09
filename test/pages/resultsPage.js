import {By, until} from "selenium-webdriver";

export default class ResultsPage {

    driver;
    resultsStatsById = By.id('result-stats');

    constructor(driver) {
        this.driver = driver;
    }

    async waitForTitle(titleValue) {
        await this.driver.wait(this.driver.wait(until.titleIs(titleValue), 1000));
    }

    async getResultsValue() {
        let text = await this.driver.findElement(this.resultsStatsById).getText();
        let numberValue = parseInt(text.split(' ')[1].replace(',', ''));
        return numberValue;
    }
}