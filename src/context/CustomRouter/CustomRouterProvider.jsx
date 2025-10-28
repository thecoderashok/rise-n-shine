import React, { useCallback, useState } from 'react'
import { CustomRouterContext } from './CustomRouterContext'
import { useLocation } from 'react-router';

const CustomRouterProvider = ({ children }) => {
    const { pathname } = useLocation();
    const [customPathname, setCustomPathname] = useState(pathname);

    const setRoute = useCallback((newPathname) => {
        setCustomPathname(newPathname);
    }, [])

    return (
        <CustomRouterContext.Provider value={{ customPathname, setRoute }}>
            {children}
        </CustomRouterContext.Provider>
    )
}

export default CustomRouterProvider;