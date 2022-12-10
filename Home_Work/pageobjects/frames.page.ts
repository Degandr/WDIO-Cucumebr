export class Frame {
  public get goToFrame() {
    return $('[id="mce_0_ifr"]');
  }

  public get findElementInFrame() {
    return $('[id="tinymce"]');
  }

  public async open(str: string) {
    return await browser.url(str);
  }
}
