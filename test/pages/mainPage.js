import {By, Key} from "selenium-webdriver";

export default class MainPage {

    driver;
    queryInput = By.name('q');

    constructor(driver) {
        this.driver = driver;
    }

    async open() {
        await this.driver.get('http://www.google.com/');
    }

    async typeQuery(queryValue) {
        await this.driver.findElement(this.queryInput).sendKeys(queryValue, Key.ENTER);
    }
}
