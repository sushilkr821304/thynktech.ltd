import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Temporarily disable smooth scroll to ensure instant jump
        document.documentElement.style.scrollBehavior = 'auto';

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });

        // Restore smooth scroll behavior after a brief delay
        // This ensures the initial page load is instant, but in-page links remain smooth
        const timeoutId = setTimeout(() => {
            document.documentElement.style.scrollBehavior = '';
        }, 50);

        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null;
}
