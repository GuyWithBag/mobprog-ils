import React from 'react'
import Image from 'next/image'

const BusinessProfiles = ({image = '/static/assets/images/business profile images/Erika.png', name = 'test name',position = 'lady killer', color}) => {
    return (
        <div className='business-profile' >
            {/*style={{backgroundColor : color}}*/}
            <h1 className="business-profile-heading">{position}</h1>
            <div className="business-profile-row">
                <div className="business-profile-image">
                    <Image 
                        src={image}
                        width='450px'
                        height='450px'
                    />
                </div>
                <div className="business-profile-content">
                    <h3>{name}</h3>
                    <div className="business-profile-about1">
                        <h3>Business-Profile</h3>
                        <h1>{position}</h1>
                        <div className="business-profile-row">
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default BusinessProfiles