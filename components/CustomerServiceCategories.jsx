import React from 'react'
import Link from 'next/link'

const CustomerServiceCategories = ( {icon, text = 'lorem ipsum'} ) => {
    return (
    <Link  >
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