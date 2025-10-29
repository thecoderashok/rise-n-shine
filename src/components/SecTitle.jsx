import React from "react";
import TextSplit from "./TextSplit";
import ScrollReveal from "./ScrollReveal/ScrollReveal";

function SecTitle({
	subTitle,
	mainTitle,
	desc,
	additionalClass,
	delaySubTitle = 0,
	delayTitle = 200,
	delayDesc = 0.3,
	revealLetters = false,
	headingTag = "h2",
}) {

	const Tag = headingTag;

	return (
		<div className={`sec--title-wrapper ${additionalClass ? additionalClass : ""}`}>
			{subTitle ?
				<TextSplit revealDelay={delaySubTitle} revealLetters={revealLetters} reveal={true}>
					<span className="sec--sub-title">{subTitle}</span>
				</TextSplit> : <></>
			}
			<TextSplit revealDelay={delayTitle} revealLetters={revealLetters} reveal={true}>
				<Tag className="sec--main-title">{mainTitle}</Tag>
			</TextSplit>

			{desc ?
				<ScrollReveal offset={30} direction="fade-up" delay={delayDesc}>
					<div className="sec--desc-wrapper">
						<p className="sec-desc">{desc}</p>
					</div>
				</ScrollReveal> : <></>
			}
		</div>
	);
}

export default SecTitle;
