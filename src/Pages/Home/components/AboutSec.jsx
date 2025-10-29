import React from 'react'
import LeftImageRightContent from '../../components/LeftImageRightContent'

const AboutSec = () => {
    return (
        <LeftImageRightContent customClasses={"home-about-sec"} content={{
            title: "About Rise N Shine",
            subTitle: "Welcome",
            img: "hero-banner.jpg",
            button: {
                label: "Read more"
            }
        }}>
            <p>
                At Rise N Shine, we are dedicated to fostering an educational environment that not only challenges our students academically but also prepares them thoroughly for the demands of the global job market. Our Certification Tracks are meticulously designed to blend rigorous academic theory with practical, real-world applications, ensuring that our students are not just learners, but innovators and industry leaders of tomorrow.
            </p>
        </LeftImageRightContent>
    )
}

export default AboutSec