import React from 'react'
import ContactForm from '../../../components/Forms/ContactForm'
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal'
import SecTitle from '../../../components/SecTitle'

const ContactSec = () => {
    return (
        <section className='contact-sec sec-gray'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <SecTitle
                            subTitle={"Contact Us"}
                            mainTitle={"Connect With Us"}
                            revealLetters={true}
                        />
                    </div>
                    <div className="col-lg-7">
                        <ScrollReveal direction="fade-up" delay={0.4}>
                            <div className="contactForm-container">
                                <ContactForm />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSec