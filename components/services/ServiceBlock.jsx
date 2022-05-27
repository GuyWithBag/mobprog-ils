import React from 'react'
import Image from 'next/image'

const ServiceBlock = ( image, text ) => {
  return (
    <div>
        <Image 
        src={image}
        width='600px'
        height='600px'
        />
        <p>
            {text}
        </p>
    </div>
  )
}

export default ServiceBlock