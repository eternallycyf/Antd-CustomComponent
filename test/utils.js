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

module.exports = {
  removeDir,
  goto,
};
