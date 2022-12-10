import { Given, When, Then } from "@wdio/cucumber-framework";

import { Dropdown } from "../pageobjects/dropdown.page";

const dropdown = new Dropdown();

Given(/^I am on dropdown page$/, async () => {
  await browser.pause(5000);
  await dropdown.open("https://the-internet.herokuapp.com/dropdown");
});

When(/^I select an option$/, async () => {
  await dropdown.click_1();
});

Then(/^I need make sure that option is selected and have a (.*)$/, async (message) => {
  await expect(dropdown.dropDownOption).toBeSelected();
  await expect(dropdown.dropDownOption).toHaveTextContaining(message);
});
