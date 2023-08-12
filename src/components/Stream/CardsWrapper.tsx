import { CircularProgress } from '@mui/material';
import { ContactCard } from './ContactCard'
import { useContext } from 'react';
import { UserContext } from '~/context/UserContext';

export const CardsWrapper = () => {
  const { data, isLoading, error } = useContext(UserContext);

  return (
    <div className="stream-card-wrapper">
      {isLoading && <CircularProgress sx={{ color: "red" }} />}
      {error && <span>Error loading data.</span>}
      {
        data?.map((user: any) => (
          <ContactCard key={user.uid} user={user} />
        ))
      }
    </div>
  )
}
