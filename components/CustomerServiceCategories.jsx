import React from 'react'
import {AiOutlineShop} from 'react-icons/ai'
import Link from 'next/link'

const CustomerServiceCategories = ( {icon = <AiOutlineShop />, text = 'lorem ipsum'} ) => {
    return (
    <Link href='customer-service/questions-and-answers' >
      <a className='customer-service-block'>
        <div className='customer-service-block-icon'>
          {icon}
        </div>
        <div className='customer-service-block-content'>
          <p>
            {text}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default CustomerServiceCategories