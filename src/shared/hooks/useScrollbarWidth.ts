import { useLayoutEffect, useState } from "react";

export const useScrollbarWidth = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState<number>(0);

  useLayoutEffect(() => {
    const currentScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (currentScrollbarWidth !== 0) {
      setScrollbarWidth(currentScrollbarWidth);
    }
  }, []);

  return scrollbarWidth;
};
