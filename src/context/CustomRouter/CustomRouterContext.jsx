import { createContext, useContext } from 'react';

export const CustomRouterContext = createContext(null);

export const useCustomRouter = () => useContext(CustomRouterContext);