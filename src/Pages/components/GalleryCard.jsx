import React from "react";
import Image from "../../components/Image";
import { Fancybox } from "@fancyapps/ui";
import { useClassNames } from "../../hook/useClassNames";

const GalleryCard = ({
    item,
    gallery = [],
    itemIndex = 0,
    customClass,
    ...props
}) => {
    const classes = useClassNames();
    const {
        image = "",
        title = null,
        width = 1200,
        height = 900,
        loading = "lazy",
    } = item;

    const handleViewImage = () => {
        const allImages = gallery.map((g) => ({
            src: g.image.src,
            type: "image",
            caption: g.title || null,
        }));

        Fancybox.show(allImages, {
            startIndex: itemIndex,
        });
    };

    return (
        <div
            className={classes("gallery-card", customClass)}
            onClick={handleViewImage}
            {...props}
        >
            <div className="img-wrapper">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={width}
                    height={height}
                    loading={loading}
                />
            </div>

            {title && (
                <div className="overlay">
                    <span className="label">{title}</span>
                </div>
            )}
        </div>
    );
};

export default GalleryCard;
