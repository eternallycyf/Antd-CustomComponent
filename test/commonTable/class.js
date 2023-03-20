const testConfig = require('../testConfig');
const utils = require('../utils');
const { domain } = testConfig;

async function CommentTableAddTest(page, callback) {
  let allCount = 0;
  let passCount = 0;
  const moduleName = '公众组件class';
  const imgId = Date.now();
  try {
    allCount++;
    await utils.goto(page, `${testConfig.domain}/home/class`, {
      timeout: 5 * 1000,
      waitUntil: [
        'domcontentloaded', // 等待 DOMContentLoaded 事件触发
      ],
    });
    // 等待列表接口请求完成
    await page.waitForRequest(`${domain}/getActivityList?page=1&limit=29&aaaaaa=1&my=121213`);
    const testBtn = await page.$('.ant-table-tbody .ant-table-row td:last-child >div >button');
    await Promise.all([testBtn.click(), page.waitForNavigation()]);
    await page.waitFor(5000);

    const otherFormItemInput = await page.waitForSelector('#otherFormItem', {
      timeout: 2000,
    });
    const keywords = '测试';
    await otherFormItemInput.type(keywords, { delay: 100 });

    await handleDropdownSelect(page, 1);

    const submitBtn = await page.$('.ant-modal-content > div.ant-modal-footer > button.ant-btn.ant-btn-primary');
    submitBtn.click();
    page.on('response', (response) => {
      response
        .json()
        .then((data) => {
          const resCode = Number(data.code);
          const apiUrl = response.url();
          const checkApiPass = apiUrl === `${domain}//updateActivityList`;
          if (resCode !== 0) {
            console.error({
              msg: data.msg,
              code: data.code,
              title: '测试不通过',
              module: moduleName,
            });
            page.screenshot({
              path: `./test/screenshot/${moduleName}${imgId}.png`,
            });
          } else if (resCode === 0) {
            if (checkApiPass) passCount++;
          }
          if (checkApiPass) {
            callback({
              allCount,
              passCount,
              moduleName,
            });
          }
        })
        .catch((err) => {
          console.error('err', err);
          callback({
            allCount,
            passCount,
            moduleName,
          });
          page.screenshot({
            path: `./test/screenshot/${moduleName}${imgId}.png`,
          });
        });
    });

    callback({
      allCount,
      passCount,
      moduleName,
    });
    page.screenshot({
      path: `./test/screenshot/${moduleName}${imgId}.png`,
    });
  } catch (error) {
    console.error('error', error);
  }
}

async function handleDropdownSelect(page, selectedIndex) {
  const allDownList = await page.$$('.ant-select-dropdown');
  const optionsList = await allDownList[allDownList.length - 1].$$('.ant-select-dropdown-menu-item');
  const selectedItem = optionsList[selectedIndex];
  await selectedItem.click();
}

module.exports.CommentTableAddTest = CommentTableAddTest;
