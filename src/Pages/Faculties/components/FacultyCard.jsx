import React from 'react'
import Image from '../../../components/Image'
import ScrollReveal from '../../../components/ScrollReveal/ScrollReveal'

const FacultyCard = ({ profile, index = 0 }) => {
    return (
        <ScrollReveal direction="clip-scale-in-downward" delay={0.1 * (index + 1)}>
            <div className="faculty-card-wrapper">
                <div className="faculty-card">
                    <div className="image-wrapper">
                        <Image
                            src={`/images/team/${profile.image}`}
                            alt={profile.name}
                            width={800}
                            height={800}
                        />
                    </div>
                    <div className="info-wrapper">
                        <div className="inner">
                            <h3 className="faculty-name">{profile.name}</h3>
                            <p className="designation">{profile.designation}</p>

                            <div className="summary">   
                                <p>{profile.education}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

export default FacultyCard