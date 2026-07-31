import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Prevent the browser from restoring the previous scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScrollPosition = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Reset immediately
    resetScrollPosition();

    // Reset once more after the new page has rendered
    const animationFrame = window.requestAnimationFrame(
      resetScrollPosition
    );

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [pathname]);

  return null;
}

export default ScrollToTop;