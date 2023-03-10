const puppeteer = require('puppeteer');
const testConfig = require('./testConfig');
const RoadShow = require('./roadShow/list');
const utils = require('./utils');

(async () => {
  const browser = await puppeteer.launch({
    // 有浏览器界面启动
    headless: false,
    // 放慢浏览器执行速度 方便测试观察
    slowMo: 100,
    devtools: true,
    args: ['--window-size=1480,960', '--unlimited-storage'],
  });

  const startTime = new Date().getTime();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1480,
    height: 960,
  });

  await page.goto(`${testConfig.domain}/login`);
})();
