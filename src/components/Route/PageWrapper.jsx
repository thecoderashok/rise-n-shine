import { useEffect } from "react";
import { useLoader } from "../../context/Loader/LoaderContext";

const PageWrapper = ({ children }) => {
    const { setPageComponentReady } = useLoader();

    useEffect(() => {
        setPageComponentReady(true);
    }, [setPageComponentReady]);

    return children;
};

export default PageWrapper;