import React from 'react'
import Image from 'next/image'
import products from '../public/static/assets/images/flowers/products.png'
const customerService = () => {
  return (
    <div className='layout-inner-contents'>
      <div>CustomerService</div>
      <Image 
      src='/static/assets/images/flowers/products.png'
      width='300px'
      height='300px'
      />
    </div>
  )
}

export default customerService