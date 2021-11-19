import { environment } from '../../environment/environment';
import { login } from '../../helpers/login';
import { UniversesNavPage } from '../../pages/universes-nav/universes-nav-page';
import { WalletPage } from '../../pages/wallet/wallet-page';

describe('Wallet', () => {
  beforeAll(async () => {
    await login(environment.username, environment.password);
    const universeNav = await UniversesNavPage.getInstance();
    await universeNav.openWalletApp();
  });

  it('should display transfer json', async () => {
    const transferData = {
      amount: '1.12345678',
      address: 'fake-address',
      memo: 'fake-memo',
    };

    const walletPage = await WalletPage.getInstance();
    const myWallet = await walletPage.goToMyWallet();
    await myWallet.fillAmount(transferData.amount);
    await myWallet.fillAddress(transferData.address);
    await myWallet.fillMemo(transferData.memo);
    const transferUos = await myWallet.clickSend();

    await transferUos.clickAdvancedView();
    const transaction = await transferUos.getTransactionContent();

    expect(transaction).not.toBeNull();
    expect(parseFloat(transaction!.data.quantity)).toBe(parseFloat(transferData.amount));
    expect(transaction?.data.to).toBe(transferData.address);
    expect(transaction?.data.memo).toBe(transferData.memo);
  });
});
