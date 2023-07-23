type Confine<A, B extends { [K in keyof B]: K extends keyof A ? A[K] : never }> = B;

export type ValueOf<T> = T[keyof T];

export type Merge<T, K> = Omit<T, keyof K> & K;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

// 重映射
type CapitalizeStr<Str extends string> = Str extends `${infer Rest}` ? `xxx-${Rest}` : Str;
