import { useCallback, useEffect } from 'react';

export function useScreenHeight() {
  const heightVariant = '--app-height';

  const appHeight = useCallback(
    () => document.documentElement.style.setProperty(heightVariant, `${window.innerHeight}px`),
    []
  );

  useEffect(() => {
    window.addEventListener('resize', appHeight);
    appHeight();

    return () => {
      document.documentElement.style.removeProperty(heightVariant);
      window.removeEventListener('resize', appHeight);
    };
  }, [appHeight]);

  return heightVariant;
}
