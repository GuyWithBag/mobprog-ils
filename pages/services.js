import React from 'react'
import { ServiceBlock } from '../components'
import { MdDeliveryDining } from 'react-icons/md'

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
          text='It would be more extraordinary if the present you would give to your loved ones fit their personality, favorites, values, etc. Celebrace got your back because Celebrace can customize your desired design, color, gifts, and more.'
        />
        <div className='service-block'>
          <div className='service-block-icon'>
            <MdDeliveryDining className='service-block-icon-image'/>
          </div>
          <div className='service-block-content'>
            <p>
            For more convenience, Celebrace offers door-to-door delivery for their beloved customers. Delivery fee depends on the customer&apos;s given location.
            </p>
          </div>
        </div>
        <ServiceBlock 
          image='/static/assets/images/flowers/1-dozen Pink Roses bouquet.png' 
          text='As technology dominates the world, people always use gadgets. For easy purchasing, Celebrace has a website. It is also available on Facebook for quality checking and online booking.'
        />
      </div>
    </div>
  )
}

export default services