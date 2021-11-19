import { Page, Target } from 'puppeteer';

export abstract class AbstractPage {
  protected constructor(protected page: Page) {}

  static async getPageFromClient(url: string): Promise<Page> {
    const target: any = await browser.waitForTarget((target: Target) => target.url().startsWith(url));
    // Some pages inside the client have the type 'other' instead of 'page'. (like the 'universes-nav' or 'login').
    // This is a hacky way of telling puppeteer that they actually are a web page.
    // We can ask the client team if this behavior could be changed.
    target._targetInfo.type = 'page';
    return target.page();
  }
}
