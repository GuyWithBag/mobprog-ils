import React from 'react'
import AiOutlineShop from 'react-icons/ai'

const CustomerServiceCategories = ( {icon = <AiOutlineShop />, text = 'lorem ipsum'} ) => {
    return (
    <button className='customer-service-block'>
      <div className='customer-service-block-icon'>
        {icon}
      </div>
      <div className='customer-service-block-content'>
        <p>
            {text}
        </p>
      </div>
    </button>
  )
}

export default CustomerServiceCategories