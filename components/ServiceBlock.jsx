import React from 'react'
import Image from 'next/image'

const ServiceBlock = ({image = '/static/assets/images/designs/celebrace_logo.png', text = 'lorem ipsum'}) => {
  return (
    <div className='service-block'>
      <div className='service-block-image'>
        <Image 
          src={image}
          width='200px'
          height='200px'
          layout='responsive'
        />
      </div>
      <div className='service-block-content'>
        <p>
            {text}
        </p>
      </div>
    </div>
  )
}

export default ServiceBlock