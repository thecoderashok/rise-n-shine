import React from "react";
import Image from "../../components/Image";

const GalleryCard = ({
    data = {},
    onClick,
    className = "",
    ...props
}) => {
    const {
        src,
        alt = "",
        title = null,
        width = 1200,
        height = 900,
        loading = "lazy",
    } = data;

    return (
        <div
            className={`gallery-card ${className}`}
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={onClick ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick(e);
                }
            } : undefined}
            {...props}
        >
            <div className="img-wrapper">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    loading={loading}
                />
            </div>
            <div className="overlay">
                {title && (
                    <span className="label">{title}</span>
                )}
            </div>
        </div>
    );
};

export default GalleryCard;

