import { useCallback, useEffect, useRef } from 'react';

/**
 * Returns a function that reads whether the component is still mounted.
 * Useful for guarding async updates after unmount.
 */
export function useIsMounted(): () => boolean {
    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);

    return useCallback(() => mounted.current, []);
}
