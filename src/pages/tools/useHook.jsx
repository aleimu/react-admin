import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // 从 localStorage 中获取初始值（如果存在）
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error while getting "${key}" from localStorage: `, error);
      return initialValue;
    }
  });

  // 当 storedValue 更新时，将其保存到 localStorage 中
  useEffect(() => {
    try {
      const value = JSON.stringify(storedValue);
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.error(`Error while setting "${key}" to localStorage: `, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export { useLocalStorage };
