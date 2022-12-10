import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page";

Given(/^I'am on the login page$/, async () => {
  await browser.pause(5000);
  await LoginPage.open("https://the-internet.herokuapp.com/login");
});

When(/^I'm using invalid (.*) and (.*)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I see an error flash (.*)$/, async (message) => {
  await expect(LoginPage.flashAlert).toBeExisting();
  await expect(LoginPage.flashAlert).toHaveTextContaining(message);
});
