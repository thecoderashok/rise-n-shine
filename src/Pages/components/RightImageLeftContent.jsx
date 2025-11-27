import React from 'react'
import { useClassNames } from '../../hook/useClassNames';
import SecTitle from '../../components/SecTitle';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';
import Image from '../../components/Image';
import Button from '../../components/Button/Button';

const RightImageLeftContent = ({ content, customClasses, props, children, titleReavealType = "letter" }) => {
    const classes = useClassNames();

    const isSecTitle = typeof content?.secTitle === "string"
        ? !!content.secTitle.trim()
        : !!content?.secTitle;

    return (
        <section className={classes(customClasses)} {...props}>
            <div className="container">
                <div className="row justify-content-between align-items-center page-text-content">

                    {isSecTitle && (
                        <div className="col-lg-12">
                            <SecTitle
                                subTitle={content?.subTitle}
                                mainTitle={content?.secTitle}
                                revealLetters={true}
                            />
                        </div>
                    )}

                    <div className="col-lg-6">
                        <SecTitle
                            mainTitle={content?.title}
                            revealLetters={titleReavealType === "letter" ? true : false}
                        />
                        <ScrollReveal direction="fade-up" delay={0.4}>
                            <div className="content-wrapper">
                                {children}
                            </div>
                        </ScrollReveal>

                        {content?.button && (
                            <Button
                                textLabel={content.button.label}
                                type="button"
                                link={content.button.link}
                                iconClass={content.button.iconClass || "fa-solid fa-arrow-right"}
                                revealDelay={0.6}
                                revealAnimation={true}
                            />
                        )}
                    </div>

                    <div className="col-lg-6 right-side order-first order-lg-last">
                        <ScrollReveal direction="fade-up" delay={0.4}>
                            <div className="img-wrapper">
                                <Image src={`/images/${content?.img}`} alt={content?.imgAlt} width={746} height={541} />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RightImageLeftContent;
