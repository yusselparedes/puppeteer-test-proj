import { ElementHandle, Page } from 'puppeteer';
import selectors from './selectors';
import { ITransferUos } from './transfer-uos.interface';

export class TransferUos {
  constructor(private page: Page) {}

  private get advancedViewSwitch(): Promise<ElementHandle> {
    return this.page.waitForSelector(selectors.advancedViewSwitch);
  }

  async clickAdvancedView(): Promise<void> {
    const advancedViewSwitch = await this.advancedViewSwitch;
    await advancedViewSwitch.click();
  }

  async getTransactionContent(): Promise<ITransferUos | null> {
    return this.page.evaluate((transactionDataCodeLines) => {
      const transactionCodeLines = document.querySelectorAll(transactionDataCodeLines);
      const transactionJSON = Array.from(transactionCodeLines)
        .map((ele) => ele.textContent)
        .join('');
      try {
        return JSON.parse(transactionJSON);
      } catch (err) {
        return null;
      }
    }, selectors.transactionDataCodeLines);
  }
}
