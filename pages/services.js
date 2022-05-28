import React from 'react'
import { ServiceBlock } from '../components'

const services = () => {
  return (
    <div className='layout-inner-contents'>
      <div className='services-about'>
        <div className='services-about-contents'>
          <h1> We Offer These Services </h1>
          <p>
          Looking for affordable yet high-quality products? 
          Worry no more, for Celebrace is here to help. Where you can purchase; 
          high-quality, unique, outstanding, freshly-picked flowers and well organized bouquets and balloons.
          </p>
        </div>
      </div>
      <div className='services-service-blocks'>
        <ServiceBlock 
          image='/static/assets/images/flowers/products.png' 
          text='It would be more extraordinary if the present you would give to your love ones fit their personality, favorites, loves and more. Celebrace got your back, because Celebrace can customize your desired, design, color, subject and more.'
        />
        <ServiceBlock 
          image='/static/assets/images/flowers/products.png' 
          text='It would be more convenient to customers if there is a door-to-door delivery. Celebrace loves you and has a free door-to-door delivery for our beloved customers.'
        />
        <ServiceBlock 
          image='/static/assets/images/flowers/products.png' 
          text='As technology dominate the world, people always use gadgets. For easy purchasing, Celebrace has a website. In order to purchase customer as easy as 1, 2, 3 tap. Further, Celebrace is available on Facebook for quality checking and online booking.'
        />
      </div>
    </div>
  )
}

export default services