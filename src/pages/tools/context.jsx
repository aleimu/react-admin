import { createContext, useState } from 'react';

const MyContext = createContext();

// eslint-disable-next-line react/prop-types
function MyContextProvider({ children }) {
  const [value, setValue] = useState('Hello, World!');

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <MyContext.Provider value={{ value, updateValue }}>
      {children}
    </MyContext.Provider>
  );
}

export { MyContextProvider, MyContext };
