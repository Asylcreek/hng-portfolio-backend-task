import { useState, useEffect } from 'react';

const useMediaQuery = (query: string): boolean => {
  //Check if the window object exists and it has the matchMedia method on it
  const supportsMatchMedia =
    typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  //Get the mediaQueryList
  const mediaQueryList = supportsMatchMedia ? window.matchMedia(query) : null;

  const [match, setMatch] = useState(!!mediaQueryList?.matches);

  useEffect(() => {
    //Break out of the effect if supportsMatchMedia is false or mediaQueryList is null
    if (!supportsMatchMedia || !mediaQueryList) return;

    const handler = () => setMatch(!!mediaQueryList.matches);

    try {
      mediaQueryList.addEventListener('change', handler);
    } catch {
      //Safari isn't supporting mediaQueryList.addEventListener
      mediaQueryList.addListener(handler);
    }

    return () => {
      try {
        mediaQueryList.removeEventListener('change', handler);
      } catch {
        //Safari isn't supporting mediaQueryList.removeEventListener
        mediaQueryList.removeListener(handler);
      }
    };
  }, [mediaQueryList, supportsMatchMedia]);

  return match;
};

export default useMediaQuery;
