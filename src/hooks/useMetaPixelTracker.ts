import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackMetaPageView } from "@/lib/metaPixelTracking";

/** Fires Meta PageView on each client-side route (SPA best practice). */
export const useMetaPixelTracker = (): void => {
  const location = useLocation();

  useEffect(() => {
    trackMetaPageView();
  }, [location.pathname, location.search]);
};
