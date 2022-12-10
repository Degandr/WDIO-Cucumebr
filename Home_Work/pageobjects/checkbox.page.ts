export class CheckBox {
  public get findCheckBox() {
    return $('[type="checkbox"]:nth-child(3)');
  }

  public async open(str: string) {
    return await browser.url(str);
  }
}
