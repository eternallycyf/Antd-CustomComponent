import '@umijs/max/typings';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string;
  }
}
