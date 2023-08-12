import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

const fetchUsers = async (url: string) => {
  return fetch(url, {
    method: "GET"
  })
    .then(resp => resp.json())
    .then(data => data)
}

export const useUsers = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const url = `https://random-data-api.com/api/v2/users?size=${pageSize}&page=${currentPage}`;
  const { data, error, isLoading } = useQuery({ queryKey: ["users", currentPage], queryFn: () => fetchUsers(url) });

  const fetchMore = () => {
    setCurrentPage((prev: number)=>prev+1)      
  }

  return { data, error, isLoading, fetchMore }
}
