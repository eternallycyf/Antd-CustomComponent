declare module '*.css';
declare module '*.less';
declare module '.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.x1sx';
declare module 'braft-extensions/dist/table';
declare module 'braft-extensions/dist/max-length';
declare module 'braft-extensions/dist/color-picker';
declare module 'braft-extensions/dist/header-id';
declare module 'mockjs';

interface Window {
  webkitIndexedDB: IDBFactory | null;
  mozIndexedDB: IDBFactory | null;
  msIndexedDB: IDBFactory | null;
}
