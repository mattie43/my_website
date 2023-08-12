import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from './context/StoreContext.tsx'
import { UserProvider } from './context/UserContext.tsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { router } from './router.tsx'
import { RouterProvider } from 'react-router-dom'
import './styles/main.scss'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </StoreProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
