import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";

Given(/^I am on the login page$/, async () => {
  await browser.pause(5000);
  await LoginPage.open("https://the-internet.herokuapp.com/login");
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
