import { Given, When, Then } from "@wdio/cucumber-framework";

import { CheckBox } from "../pageobjects/checkbox.page";

const checkBox = new CheckBox();

Given(/^I go to the CheckBox page$/, async () => {
  await browser.pause(5000);
  await checkBox.open("https://the-internet.herokuapp.com/checkboxes");
});
When(/^I find the first CheckBox$/, async () => {
  return checkBox.findCheckBox;
});

Then(/^I need make sure that second CheckBox is selected by default$/, async () => {
  await expect(checkBox.findCheckBox).toBeSelected();
});
