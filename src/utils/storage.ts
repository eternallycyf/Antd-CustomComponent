import * as JsCookie from 'js-cookie';
const { get, set, remove } = JsCookie.default;

const cookieKey = 'token';

function isJSON(str: string | null) {
  if (!str) {
    return false;
  }
  if (typeof str === 'string') {
    try {
      let obj = JSON.parse(str);
      if (typeof obj === 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
}

const cookie = {
  getCookie(name?: string) {
    return get(name || cookieKey);
  },
  setCookie(name: string, value: any) {
    return set(name || cookieKey, value);
  },
  removeCookie(name?: string) {
    return remove(name || cookieKey);
  },
};

type StorageType = 'localStorage' | 'sessionStorage';
const store = (type: StorageType) => ({
  get(item: string): any {
    const json = window[type].getItem(item) || null;
    return isJSON(json) ? JSON.parse(json!) : json;
  },
  set(item: string, value: any): void {
    window[type].setItem(item, JSON.stringify(value));
  },
  remove(item: string): void {
    window[type].removeItem(item);
  },
  removeAll(): void {
    window[type].clear();
  },
});

const localStore = store('localStorage');
const sessionStore = store('sessionStorage');

export { cookie, localStore, sessionStore };
