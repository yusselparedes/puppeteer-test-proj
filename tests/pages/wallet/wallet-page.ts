import { MyWallet } from '../../components/wallet/my-wallet/my-wallet';
import { environment } from '../../environment/environment';
import { AbstractPage } from '../abstract-page';

export class WalletPage extends AbstractPage {
  static async getInstance(): Promise<WalletPage> {
    return new WalletPage(await this.getPageFromClient(environment.walletUrl));
  }

  async goToMyWallet(): Promise<MyWallet> {
    await this.page.goto(`${environment.walletUrl}wallet/my-wallet`);
    return new MyWallet(this.page);
  }
}
