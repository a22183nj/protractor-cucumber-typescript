import { $, ElementFinder } from "protractor";

export class SearchPageObject {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public logo: ElementFinder;

    constructor() {
        this.searchTextBox = $("input[name='q']");
        this.searchButton = $("input[value='Google Search']");
        this.logo = $("div.logo img");
    }
}
