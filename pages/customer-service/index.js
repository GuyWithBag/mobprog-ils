import React from 'react'
import { CustomerServiceCategories, CustomerServiceHotQuestion } from '../../components'
import { AiOutlineShop } from 'react-icons/ai'
import { MdOutlinePayments, MdOutlineLocalShipping } from 'react-icons/md'
import { HiOutlineReceiptRefund, HiOutlineNewspaper } from 'react-icons/hi'
import { BsPeople } from 'react-icons/bs'

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
              icon={<MdOutlinePayments className='customer-service-block-icon-image'/>} 
              text='Payments'
            />
            <CustomerServiceCategories
              icon={<HiOutlineReceiptRefund className='customer-service-block-icon-image'/>} 
              text='Returns & Refunds'
            />
          </div>
          <div className='customer-service-categories-blocks'>
            <CustomerServiceCategories
              icon={<MdOutlineLocalShipping className='customer-service-block-icon-image'/>}
              text='Orders and Shipping'
            />
            <CustomerServiceCategories
              icon={<HiOutlineNewspaper className='customer-service-block-icon-image'/>} 
              text='General'
            />
          </div>
        </div>
        <div className='customer-service-hot-questions'>
          <h1>Hot Questions</h1>
          <div className='customer-service-all-hot-questions'>
            <CustomerServiceHotQuestion text='How to pay?'/>
            <CustomerServiceHotQuestion text='Where is your store location?'/>
            <CustomerServiceHotQuestion text='Can we make the delivery into a surpise?'/>
            <CustomerServiceHotQuestion text='How will i know if my order is confirmed and ready for processing?'/>
            <CustomerServiceHotQuestion text='Can you make the sender Annonymous?'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default customerService