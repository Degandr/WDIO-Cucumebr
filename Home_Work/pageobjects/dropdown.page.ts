export class Dropdown {
  public get dropDownOption() {
    return $('[id="dropdown"] > [value="1"]');
  }

  public async click_1() {
    await this.dropDownOption.click();
  }

  public async open(str: string) {
    return await browser.url(str);
  }
}
