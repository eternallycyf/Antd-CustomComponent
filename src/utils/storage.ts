import { get, set, remove } from 'js-cookie';

const cookieKey = 'admin-token';

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
    return JSON.parse(window[type].getItem(item) || 'null');
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
