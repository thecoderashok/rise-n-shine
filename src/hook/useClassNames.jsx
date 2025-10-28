import React, { useCallback } from 'react'

export const useClassNames = () => {
    const combineClasses = useCallback((...classStrings) => {
        return classStrings
            .filter(str => typeof str === "string" && str.trim() !== "")
            .map(str => str.trim().replace(/\s+/g, " "))
            .join(" ");
    }, []);

    return combineClasses;
}