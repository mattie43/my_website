import { createContext } from 'react';
import { useUsers } from '~/hooks/useUsers';

export const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: any) => {
  const { data, isLoading, error, fetchMore } = useUsers();

  const values: any = {
    data,
    isLoading,
    error,
    fetchMore
  };

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
};
