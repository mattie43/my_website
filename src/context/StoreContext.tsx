import { createContext, useState } from 'react';

export const StoreContext = createContext<any>(null);

export const StoreProvider = ({ children }: any) => {
  const [count, setCount] = useState(2);

  const values: any = {
    count,
    setCount
  }

  return (
    <StoreContext.Provider value={values}>
      {children}
    </StoreContext.Provider>
  )
};
