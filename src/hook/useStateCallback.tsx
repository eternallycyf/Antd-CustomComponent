import { SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

const useStateCallback = (defaultVal: any) => {
  const [state, setState] = useState(defaultVal);
  const listenRef = useRef<any>(); //监听新状态的回调器
  const _setState = useCallback((newVal: SetStateAction<any>, callback: Function) => {
    listenRef.current = callback;
    setState(newVal);
  }, []);
  useEffect(() => {
    if (listenRef.current) {
      listenRef.current(state);
    }
  }, [state]);

  return [state, _setState];
};

export default useStateCallback;
