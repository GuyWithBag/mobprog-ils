import React from 'react'
import Image from 'next/image'

const ServiceBlock = ({text = 'lorem ipsum'}) => {
  return (
    <div>
        <p>
            {text}
        </p>
    </div>
  )
}

export default ServiceBlock