import React from "react";

const Image = ({
    src,
    alt = "",
    width,
    height,
    loading = "lazy",
    priority = false,
    ...rest
}) => {
    const fetchPriority = priority ? "high" : "auto";

    const optimizeImagePath = (imageUrl) => {
        if (!imageUrl) return "";
        if (import.meta.env.MODE === "production") {
            return imageUrl.replace(/\.(jpg|jpeg)$/i, ".jpg");
        }
        return imageUrl;
    };

    return (
        <img
            src={optimizeImagePath(src)}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : loading}
            fetchPriority={fetchPriority}
            decoding="async"
            {...rest}
        />
    );
};

export default Image;
