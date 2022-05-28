import React from 'react'
import { BusinessProfiles } from '../components'

const businessProfile = () => {
  return (
    <>
      <h3 className='business-profile-sub-heading'>
        BusinessProfile
      </h3>
      <div className='layout-inner-contents'>
        <div className='business-profile-introduction-container'>
          <div className='business-profile-introduction'>
            <p>
              Celebrace is a budget-family-friendly business that helps you to commemorate memorable occasions like birthdays, anniversaries, and other special events.  Celebrace offers you fast-affordable products with a wide range of presents and services such as Customize Bouquets, Balloon arrangements, invitations, ref magnets, etc.  It also helps your family, friends, and loved ones celebrate their special occasion with occasional unforgettable presents to make their day more extraordinary. 
            </p>
          </div>
        </div>
        <div className='business-profiles-list'>
          <BusinessProfiles 
            name='Erika Frances Racacho'
            image='/static/assets/images/business profile images/Erika.png'
            position='Manager'
            color='#FF007E'
          />
        </div>   
      </div>                  
    </>
  )
}

export default businessProfile 
