import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

const ProgrammeCard = ({ programme, itemIndex = 0 }) => {
    const {
        title,
        desc,
        label,
        modules = [],
        icon,
        accentColor,
    } = programme || {};

    const iconMask = icon ? `url(/icons/${icon})` : undefined;

    return (
        <ScrollReveal
            direction="clip-scale-in-downward"
            delay={0.1 * (itemIndex + 1)}
        >
            <div className="programme-item-wrapper">
                <div className="programme-item">
                    <div className="content-wrapper">
                        <div className="icon">
                            <span
                                style={{
                                    maskImage: iconMask,
                                    WebkitMaskImage: iconMask,
                                }}
                            />
                        </div>

                        {label && (
                            <div className="labels">
                                <span>{label}</span>
                            </div>
                        )}

                        <h3
                            className="title-text"
                            style={{ color: accentColor }}
                        >
                            {title}
                        </h3>

                        {desc && <p className="desc-text">{desc}</p>}
                    </div>

                    {modules.length > 0 && (
                        <ul className="modules-list">
                            <span className="heading">Modules</span>
                            {modules.map((module, moduleIndex) => (
                                <li className="module-item" key={moduleIndex}>
                                    <i className="fa-solid fa-book-open-reader" />
                                    <span>{module}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </ScrollReveal>
    );
};

export default ProgrammeCard;
