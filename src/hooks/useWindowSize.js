import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth });
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup the event listener when the component is removed
    return () => window.removeEventListener('resize', handleResize);
  }, []); // The empty array means this effect runs only once on mount

  return size;
}