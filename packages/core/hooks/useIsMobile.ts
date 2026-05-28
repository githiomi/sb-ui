import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint: number = 768) => {
    const getMatch = () =>
        typeof window !== "undefined" && typeof window.matchMedia === "function"
            ? window.matchMedia(`(max-width: ${breakpoint}px)`).matches
            : false;

    const [isMobile, setIsMobile] = useState<boolean>(getMatch);

    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return;
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
        const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [breakpoint]);

    return isMobile;
};
