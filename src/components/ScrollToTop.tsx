"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function forceScrollTopInstant() {
  const html = document.documentElement;
  html.style.scrollBehavior = "auto";
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  html.scrollTop = 0;
  document.body.scrollTop = 0;

  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    html.scrollTop = 0;
    document.body.scrollTop = 0;
  });

  window.setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    html.scrollTop = 0;
    document.body.scrollTop = 0;
    html.style.scrollBehavior = "";
  }, 60);
}

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const navEntries = performance.getEntriesByType("navigation");
    const isReload =
      navEntries.length > 0 &&
      (navEntries[0] as PerformanceNavigationTiming).type === "reload";

    if (isReload || !window.location.hash) {
      forceScrollTopInstant();
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!window.location.hash) {
      forceScrollTopInstant();
    }
  }, [pathname]);

  return null;
}
