import { useState, useEffect, useCallback, useRef } from 'react';
import debounce from 'lodash/debounce';

//防抖
export const useDebounceFn = (fn, wait) => {
  return useCallback(debounce(fn, wait), []);
};

// 防抖的副作用(依赖更新时防抖更新 state，新 state 更新时执行副作用)
export function useDebounceEffect(effectCallback, depsList, wait) {
  const [debounced, setDebounced] = useState({});
  const isFirstMount = useFirstMountState(); // 是否首次渲染
  const update = useDebounceFn(() => {
    setDebounced({});
  }, wait);
  useEffect(() => {
    update();
  }, depsList);
  useEffect(() => {
    if (!isFirstMount) {
      // 如果不是首次，则执行 effect 函数
      return effectCallback();
    }
  }, [debounced]);
}

// 用于记录当前渲染是否是首次渲染
export function useFirstMountState() {
  const isFirst = useRef(true);
  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }
  return isFirst.current;
}
