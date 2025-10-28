import { useEffect } from 'react';
import { useLocation } from 'react-router';

const useHashScroll = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);
};

export default useHashScroll;
