import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll to the top of the page whenever the route changes.
// React Router does not do this automatically — without it, navigating
// to a new page keeps whatever scroll position the previous page had.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;s