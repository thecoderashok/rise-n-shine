import React from 'react'
import Image from '../../../components/Image'

const FacultyCard = ({ profile }) => {
    return (
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
    )
}

export default FacultyCard