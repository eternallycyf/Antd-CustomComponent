const fs = require('fs');

/**
 * @param {*} path
 */
async function removeDir(path) {
  if (fs.existsSync(path)) {
    const dirs = [];
    const files = fs.readFileSync(path);
    files.forEach(async (file) => {
      const childPath = `${path}/${file}`;
      if (fs.statSync(childPath).isDirectory()) {
        await removeDir(childPath);
        dirs.push(childPath);
      } else {
        fs.unlinkSync(path);
      }
    });
    dirs.forEach((fir) => fs.rmdirSync(fir));
  } else {
    console.log('no such file or directory, failed to remove');
  }
}

async function goto(page, link) {
  return page.evaluate((link) => {
    location.href = link;
  }, link);
}

async function click(page, selector, timeout = 30000) {
  await page.waitForSelector(selector, { visible: true, timeout });
  let error;
  while (timeout > 0) {
    try {
      await page.click(selector);
      return;
    } catch (e) {
      await page.waitFor(100);
      timeout -= 100;
      error = e;
    }
  }
  throw err;
}

module.exports = {
  removeDir,
  goto,
  click,
};
