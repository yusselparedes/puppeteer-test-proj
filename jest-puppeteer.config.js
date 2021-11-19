module.exports = {
  launch: {
    headless: false,
    defaultViewport: null,
    waitForInitialPage: false,
    executablePath: 'C:/Program Files/Ultra_Dev/Application/ultra.exe',
    ignoreDefaultArgs: ['--disable-component-extensions-with-background-pages'],
    args: ['--window-size=1280,720'],
    slowMo: 0 /* slows down Puppeteer operations by the specified amount of milliseconds. */,
  },
};
