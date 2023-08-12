import { createContext } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query'

const fetchUsers = async ({ pageParam = 0 }) => {
  const pageSize = 10;
  const url = `https://random-data-api.com/api/v2/users?size=${pageSize}&page=${pageParam}`;
  const resp = await fetch(url);
  return resp.json();
}

const nextPageParam = (_lastPage: any, pages: any) => {
  return pages + 1;
}

export const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: any) => {
  const { data, error, isLoading, fetchNextPage } = useInfiniteQuery({ queryKey: ["users"], queryFn: fetchUsers, getNextPageParam: nextPageParam });

  const values: any = {
    data: data?.pages.flat(),
    isLoading,
    error,
    fetchNextPage
  };

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  )
};
