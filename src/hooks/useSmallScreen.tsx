import { useEffect, useState } from 'react'

export const useSmallScreen = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        function handleResize() {
        setIsSmallScreen(window.innerWidth <= 768); // Adjust this breakpoint as needed
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isSmallScreen;
}