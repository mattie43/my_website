import { CircularProgress } from '@mui/material';
import { ContactCard } from './ContactCard'
import { useContext, useRef, useEffect } from 'react';
import { UserContext } from '~/context/UserContext';

export const CardsWrapper = () => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } = useContext(UserContext);
  const loadingMoreRef = useRef<HTMLDivElement>(null);
  const justLoadedMoreRef = useRef(false);
  const firstLoad = useRef(true);

  useEffect(() => {
    const ref = loadingMoreRef.current
    if (!ref) return;

    const handleIntersection = () => {
      if (firstLoad.current) {
        firstLoad.current = false;
        return;
      }
      if (justLoadedMoreRef.current) return;
      justLoadedMoreRef.current = true;
      setTimeout(async () => {
        await fetchNextPage();
      }, 1000);
      setTimeout(() => {
        justLoadedMoreRef.current = false;
      }, 3000);
    }

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    });

    observer.observe(ref);

    return () => {
      observer.unobserve(ref);
    };
  }, [fetchNextPage]);

  return (
    <div className="stream-card-wrapper">
      {isLoading && <CircularProgress sx={{ color: "red" }} />}
      {error && <span>Error loading data.</span>}
      {
        data?.map((user: any) => (
          <ContactCard key={user.uid} user={user} />
        ))
      }
      <div className="loading-more" ref={loadingMoreRef} hidden={isLoading || !hasNextPage}>
        <div>
          <CircularProgress sx={{ color: "red" }} />
        </div>
      </div>
    </div>
  )
}
