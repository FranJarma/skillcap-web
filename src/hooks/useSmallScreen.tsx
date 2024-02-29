'use client'
import { useEffect, useMemo, useState } from 'react'
export const useSmallScreen = (sizeToCheck: number) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isSmallScreen = useMemo(() => {
        return windowWidth <= sizeToCheck;
    }, [windowWidth, sizeToCheck]);

    return isSmallScreen;
}