import { Given, When, Then } from "@wdio/cucumber-framework";

import { Frame } from "../pageobjects/frames.page";

const frame = new Frame();

Given(/^I go to iFrame page$/, async () => {
  await browser.pause(5000);
  await frame.open("https://the-internet.herokuapp.com/iframe");
});

When(/^I go to Frame$/, async () => {
  return await browser.switchToFrame(await browser.$(await frame.goToFrame));
});

Then(/^I need make sure that default text is (.*)$/, async (message) => {
  await expect(frame.findElementInFrame).toHaveTextContaining(message);
});
