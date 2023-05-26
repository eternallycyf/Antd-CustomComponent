const puppeteer = require('puppeteer');
const path = require('path');
const testConfig = require('./testConfig');
const CommentTable = require('./commonTable/class');
const utils = require('./utils');

(async () => {
  const browser = await puppeteer.launch({
    // 有浏览器界面启动
    headless: false,
    // 放慢浏览器执行速度 方便测试观察
    slowMo: 100,
    devtools: true,
    args: ['--window-size=1480,960', '--unlimited-storage'],
    debuggerPort: 9992,
  });

  const startTime = new Date().getTime();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1480,
    height: 960,
  });

  await utils.goto(page, `${testConfig.domain}/login`);
  await page.waitForNavigation();

  const username = await page.$("input[type='text']");
  await username.type(testConfig.username);
  const password = await page.$("input[type='password']");
  await password.type(testConfig.password);
  const submit = await page.$("button[type='submit']");
  await Promise.all([submit.click(), page.waitForNavigation()]);
  const submitBtn = await page.waitForSelector('.ant-tour-close');
  await submitBtn.click();

  page.on('pageerror', (err) => {
    console.error(err);
  });

  // await utils.removeDir(path.join(__dirname, '/screenshot'));

  let testResList = [];
  let isLastTest = false;

  function handleLastTest(flag) {
    isLastTest = flag;
    return statisticsTestResult;
  }

  function statisticsTestResult(testResult) {
    testResList.push(testResult);
    if (isLastTest) {
      let allCount = 0;
      let passCount = 0;
      testResList.forEach((item) => {
        allCount += item.allCount;
        passCount += item.passCount;
      });

      testResList.push({
        moduleName: '总计',
        allCount,
        passCount,
      });

      console.log('测试结果完成, 统计结果如下:');
      console.table(testResList);

      if (allCount === passCount && passCount > 0) {
        console.log('\x1B[32m%s\x1B[39m', '测试通过');
      }

      const spendTime = (new Date().getTime() - startTime) / 1000;
      console.log('\x1B[32m%s\x1B[39m', `done in ${spendTime}s.`);
    }
  }

  // 非最后的测试用例  handleLastTest(false)  最后的测试用例 handleLastTest(true)
  await CommentTable.CommentTableAddTest(page, handleLastTest(true));

  // await page.close();
  // await browser.close();
})();
