import { CircularProgress } from '@mui/material';
import { ContactCard } from './ContactCard'
import { useContext, useRef, useEffect, useState } from 'react';
import { UserContext } from '~/context/UserContext';

export const CardsWrapper = () => {
  const { data, isLoading, error, fetchNextPage } = useContext(UserContext);
  const intersectionRef = useRef<HTMLDivElement>(null);
  const justLoadedMoreRef = useRef(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const ref = intersectionRef.current
    if (!ref) return;

    const handleIntersection = () => {
      if (justLoadedMoreRef.current) return;
      console.log("loading more")
      justLoadedMoreRef.current = true;
      setLoadingMore(true);
      setTimeout(() => {
        intersectionRef.current?.scrollIntoView();
      }, 100);
      setTimeout(async () => {
        await fetchNextPage();
        setLoadingMore(false);
      }, 1000);
      setTimeout(() => {
        justLoadedMoreRef.current = false;
      }, 3000);
    }

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
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
      <div ref={intersectionRef}>
        {loadingMore && <CircularProgress sx={{ color: "red" }} />}
      </div>
    </div>
  )
}
