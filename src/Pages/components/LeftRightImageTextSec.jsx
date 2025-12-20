import React from "react";
import SecTitle from "../../components/SecTitle";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";
import Button from "../../components/Button/Button";
import Image from "../../components/Image";
import { useClassNames } from "../../hook/useClassNames";
import { useModal } from "../../context/Modal/ModalContext";

const LeftRightImageTextSec = ({
    imagePosition = "left",
    image = {},
    subTitle,
    mainTitle,
    content,
    buttons = [],
    sectionClass = "",
    contentWrapperClass = "",
    imageColClass: customImageColClass,
    contentColClass: customContentColClass,
}) => {
    const classes = useClassNames();
    const { openModal } = useModal();

    const isImageLeft = imagePosition === "left";

    const defaultImageCol = "col-lg-5";
    const defaultContentCol = "col-lg-7";

    const imageColClass = customImageColClass || defaultImageCol;

    const contentColClass = customContentColClass
        ? `${customContentColClass} ${isImageLeft ? "right-side" : "left-side"}`
        : `${defaultContentCol} ${isImageLeft ? "right-side" : "left-side"}`;

    const getButtonProps = (btn) => {
        const isBookAppointment = btn.type === "book_appointment";

        return {
            link: isBookAppointment ? null : btn.link ?? null,
            onClick: isBookAppointment
                ? () => openModal({ modalName: "book_appointment" })
                : btn.onClick,
        };
    };

    return (
        <section className={`lr-image-text-sec ${sectionClass}`}>
            <div className="container">
                <div className="row align-items-center page-text-content">
                    {isImageLeft && (
                        <div className={imageColClass}>
                            <ScrollReveal direction="clip-scale-in-downward" delay={0.2}>
                                <div className="image-wrapper">
                                    <Image {...image} />
                                </div>
                            </ScrollReveal>
                        </div>
                    )}

                    <div className={`${contentColClass} ${contentWrapperClass}`}>
                        <SecTitle subTitle={subTitle} mainTitle={mainTitle} />

                        <ScrollReveal direction="fade-up" offset={40} delay={0.4}>
                            <div
                                className="content-wrapper"
                                {...(typeof content === "string"
                                    ? { dangerouslySetInnerHTML: { __html: content } }
                                    : { content })}
                            >
                            </div>
                        </ScrollReveal>

                        {buttons.length > 0 && (
                            <div className="buttons-wrapper">
                                {buttons.map((btn, index) => (
                                    <Button
                                        key={index}
                                        textLabel={btn.textLabel}
                                        customClass={classes(btn.customClass)}
                                        revealDelay={0.45 + index * 0.1}
                                        revealAnimation={btn.revealAnimation ?? true}
                                        {...getButtonProps(btn)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {!isImageLeft && (
                        <div className={imageColClass}>
                            <ScrollReveal direction="clip-scale-in-downward" delay={0.2}>
                                <div className="image-wrapper">
                                    <Image {...image} />
                                </div>
                            </ScrollReveal>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LeftRightImageTextSec;
