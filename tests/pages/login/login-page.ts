import { ElementHandle } from 'puppeteer';
import { environment } from '../../environment/environment';
import { AbstractPage } from '../abstract-page';
import selectors from './selectors';

export class LoginPage extends AbstractPage {
  static async getInstance(): Promise<LoginPage> {
    return new LoginPage(await this.getPageFromClient(environment.launchScreenUrl));
  }

  private get usernameInput(): Promise<ElementHandle> {
    return this.page.waitForSelector(selectors.usernameInput);
  }
  private get passwordInput(): Promise<ElementHandle> {
    return this.page.waitForSelector(selectors.passwordInput);
  }
  private get loginButton(): Promise<ElementHandle> {
    return this.page.waitForSelector(selectors.loginButton);
  }

  async fillUsername(username: string): Promise<void> {
    const usernameInput = await this.usernameInput;
    await usernameInput.type(username, { delay: 100 });
  }
  async fillPassword(password: string): Promise<void> {
    const passwordInput = await this.passwordInput;
    await passwordInput.type(password, { delay: 100 });
  }
  async clickLogin(): Promise<void> {
    const loginButton = await this.loginButton;
    await loginButton.click();
  }
}
