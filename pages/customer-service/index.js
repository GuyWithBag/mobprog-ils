import React from 'react'
import { CustomerServiceCategories, CustomerServiceHotQuestion } from '../../components'
import { AiOutlineShop } from 'react-icons/ai'

const customerService = () => {
  return (
    <div className='layout-inner-contents'>
      <div className='customer-service-banner'>
        <div className='customer-service-banner-contents'>
          <h1 className='customer-service-header'>Customer Service</h1>
          <h1 className='customer-service-sub-heading'>How can we help you?</h1>
        </div>
      </div>
      <div className='customer-service-services'>
        <div className='customer-service-categories'>
          <h1>Categories</h1>
          <div className='customer-service-categories-blocks'>
            <CustomerServiceCategories
              icon={<AiOutlineShop className='customer-service-block-icon-image'/>} 
              text='Shop with Us'
            />
            <CustomerServiceCategories
              icon={<AiOutlineShop className='customer-service-block-icon-image'/>} 
              text='Shop with Us'
            />
            <CustomerServiceCategories
              icon={<AiOutlineShop className='customer-service-block-icon-image'/>} 
              text='Shop with Us'
            />
          </div>
          <div className='customer-service-categories-blocks'>
            <CustomerServiceCategories
              icon={<AiOutlineShop className='customer-service-block-icon-image'/>} 
              text='Shop with Us'
            />
            <CustomerServiceCategories
              icon={<AiOutlineShop className='customer-service-block-icon-image'/>} 
              text='Shop with Us'
            />
            <CustomerServiceCategories
              icon={<AiOutlineShop className='customer-service-block-icon-image'/>} 
              text='Shop with Us'
            />
          </div>
        </div>
        <div className='customer-service-hot-questions'>
          <h1>Hot Questions</h1>
          <div className='customer-service-all-hot-questions'>
            <CustomerServiceHotQuestion text='This is a very cool and long informative hot-question?'/>
            <CustomerServiceHotQuestion text='This is a very cool and long informative hot-question?'/>
            <CustomerServiceHotQuestion text='This is a very cool and long informative hot-question?'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default customerService