import { ElementHandle } from 'puppeteer';
import { environment } from '../../environment/environment';
import { AbstractPage } from '../abstract-page';
import selectors from './selectors';

export class UniversesNavPage extends AbstractPage {
  static async getInstance(): Promise<UniversesNavPage> {
    return new UniversesNavPage(await this.getPageFromClient(environment.universesNavUrl));
  }

  private get appIcons(): Promise<ElementHandle[]> {
    return this.page.waitForSelector(selectors.appIcon).then(() => this.page.$$(selectors.appIcon));
  }
  private get storeAppIcon(): Promise<ElementHandle> {
    return this.appIcons.then((icon) => icon[0]);
  }
  private get walletAppIcon(): Promise<ElementHandle> {
    return this.appIcons.then((icon) => icon[1]);
  }

  async openStoreApp(): Promise<void> {
    const appIcon = await this.storeAppIcon;
    await appIcon.click();
  }

  async openWalletApp(): Promise<void> {
    const appIcon = await this.walletAppIcon;
    await appIcon.click();
  }
}
