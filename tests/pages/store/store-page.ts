import { ElementHandle } from 'puppeteer';
import { environment } from '../../environment/environment';
import { AbstractPage } from '../abstract-page';
import selectors from './selectors';

export class StorePage extends AbstractPage {
  static async getInstance(): Promise<StorePage> {
    return new StorePage(await this.getPageFromClient(environment.storeUrl));
  }

  private get recommendedGamesSlides(): Promise<ElementHandle[]> {
    return this.page
      .waitForSelector(selectors.recommendedGamesSlide)
      .then(() => this.page.$$(selectors.recommendedGamesSlide));
  }

  async getRecommendedGamesCount(): Promise<number> {
    const recommendedGamesSlides = await this.recommendedGamesSlides;
    return recommendedGamesSlides.length;
  }
}
