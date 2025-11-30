import ScrollReveal from "../../../components/ScrollReveal/ScrollReveal";

const ProgrammeCard = ({ program, index = 0 }) => {
    if (!program) {
        return null;
    }

    const modules = Array.isArray(program.modules) ? program.modules : [];
    const iconMask = program.icon ? `url(icons/${program.icon})` : undefined;

    return (
        <ScrollReveal direction="fade-up" delay={0.1 * (index + 1)}>
            <div className="programme-item-wrapper">
                <div className="programme-item">
                    <div className="content-wrapper">
                        <div className="icon">
                            <span
                                style={{
                                    maskImage: iconMask,
                                    WebkitMaskImage: iconMask,
                                }}
                            ></span>
                        </div>
                        {program.label && (
                            <div className="labels">
                                <span>{program.label}</span>
                            </div>
                        )}
                        <h3
                            className="title-text"
                            style={{ color: program.accentColor }}
                        >
                            {program.title}
                        </h3>
                        <p className="desc-text">{program.desc}</p>
                    </div>
                    <ul className="modules-list">
                        <span className="heading">
                            Modules
                        </span>
                        {modules.map((module, moduleIndex) => (
                            <li className="module-item" key={moduleIndex}>
                                <i className="fa-solid fa-book-open-reader"></i>
                                <span>{module}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </ScrollReveal>
    );
};

export default ProgrammeCard;
