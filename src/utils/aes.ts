const CryptoJS = require('crypto-js');

const DEFAULT_KEY = {
  SHARE_KEY: '123456',
};

// AES加密
export function aesEncrypt(data: string, secretKey: string = DEFAULT_KEY.SHARE_KEY) {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
}

// AES解密
export function aesDecrypt(data: string, secretKey: string = DEFAULT_KEY.SHARE_KEY) {
  return CryptoJS.AES.decrypt(data, secretKey).toString(CryptoJS.enc.Utf8);
}
