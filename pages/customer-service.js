import React from 'react'
import Image from 'next/image'

const customerService = () => {
  return (
    <div className='layout-inner-contents'>
      <div>CustomerService</div>
      <Image 
      src='/static/assets/images/designs/celebrace_logo.png'
      width='300px'
      height='300px'
      />
    </div>
  )
}

export default customerService