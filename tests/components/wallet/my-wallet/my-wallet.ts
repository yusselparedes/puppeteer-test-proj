import { ElementHandle, Page } from 'puppeteer';
import { TransferUos } from '../../transaction/transfer-uos/transfer-uos';
import selectors from './selectors';

export class MyWallet {
  constructor(private page: Page) {}

  private get amountInput(): Promise<ElementHandle> {
    return this.page.waitForSelector(selectors.amountInput);
  }
  private get addressInput(): Promise<ElementHandle> {
    return this.page.waitForSelector(selectors.addressInput);
  }
  private get memoInput(): Promise<ElementHandle> {
    return this.page.waitForSelector(selectors.memoInput);
  }
  private get sendButton(): Promise<ElementHandle> {
    return this.page.waitForSelector(selectors.sendButton);
  }

  async fillAmount(amount: string): Promise<void> {
    const amountInput = await this.amountInput;
    await amountInput.type(amount, { delay: 100 });
  }
  async fillAddress(address: string): Promise<void> {
    const addressInput = await this.addressInput;
    await addressInput.type(address, { delay: 100 });
  }
  async fillMemo(memo: string): Promise<void> {
    const memoInput = await this.memoInput;
    await memoInput.type(memo, { delay: 100 });
  }
  async clickSend(): Promise<TransferUos> {
    const sendButton = await this.sendButton;
    await sendButton.click();
    return new TransferUos(this.page);
  }
}
