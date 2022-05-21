import React from 'react'
import Image from 'next/image'
import products from '../public/assets/images/flowers/products.png'
const customerService = () => {
  return (
    <div className='layout-inner-contents'>
      <div>CustomerService</div>
      <Image 
      src={products}
      width='300px'
      height='300px'
      />
    </div>
  )
}

export default customerService