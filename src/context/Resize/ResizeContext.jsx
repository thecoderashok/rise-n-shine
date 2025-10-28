import { createContext, useContext } from "react";

export const ResizeContext = createContext(null);

export const useResize = () => useContext(ResizeContext);;
