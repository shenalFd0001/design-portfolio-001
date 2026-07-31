import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Reset Lenis scroll
    if (lenis) {
      lenis.scrollTo(0, {
        immediate: true,
        force: true,
      });
    }

    // Browser fallback
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, lenis]);

  return null;
}

export default ScrollToTop;