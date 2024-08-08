"use client";
import { useEffect, useMemo, useState } from "react";
export const useSmallScreen = (sizeToCheck: number) => {
  const isClient = typeof window === "object";

  const [windowWidth, setWindowWidth] = useState(
    isClient ? window.innerWidth : 0
  );

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  const isSmallScreen = useMemo(() => {
    return windowWidth <= sizeToCheck;
  }, [windowWidth, sizeToCheck]);

  return isSmallScreen;
};
