import { browser, protractor } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { Given, When, Then } = require("cucumber");
const search: SearchPageObject = new SearchPageObject();
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

When(/^I type "(.*?)"$/, async (text) => {
    await search.searchTextBox.sendKeys(text);
    await browser.sleep(1000)
});

When(/^I click on search button$/, async () => {
    await search.searchTextBox.sendKeys(protractor.Key.ENTER);
    await browser.sleep(1000)
});

Given(/^I am on google search page$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("Google");
    await browser.sleep(1000)
});

Then(/^I clear the search text$/, async () => {
    await search.searchTextBox.clear();
    await browser.sleep(1000)
});
