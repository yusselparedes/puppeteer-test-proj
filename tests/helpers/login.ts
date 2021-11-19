import { LoginPage } from '../pages';

export async function login(username: string, password: string) {
  const loginPage = await LoginPage.getInstance();
  await loginPage.fillUsername(username);
  await loginPage.fillPassword(password);
  await loginPage.clickLogin();
}
