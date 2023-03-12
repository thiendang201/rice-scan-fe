import { useEffect, useState } from 'react';

const toMatch = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i,
];

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const matched = toMatch.some((toMatchItem) => {
      return navigator?.userAgent?.match(toMatchItem);
    });

    setIsMobile(matched);
  }, []);

  return isMobile;
}
