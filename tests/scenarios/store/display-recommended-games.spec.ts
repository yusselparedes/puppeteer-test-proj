import { environment } from '../../environment/environment';
import { login } from '../../helpers/login';
import { StorePage } from '../../pages';

describe('Store', () => {
  beforeAll(async () => {
    await login(environment.username, environment.password);
  });

  it('should display 4 recommended games', async () => {
    const storePage = await StorePage.getInstance();
    const recommendedGamesCount = await storePage.getRecommendedGamesCount();

    expect(recommendedGamesCount).toBe(4);
  });
});
