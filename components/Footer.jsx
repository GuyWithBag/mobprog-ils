import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footer'>
      <hr className='footer-line'/>
      <div className='footer-container'>
        <div className='footer-container-contents'>
          <div className='payment-options'>
            <h1>Payment Options</h1>
            <div className='payment-options-icons'>
              <Image 
                src={'/static/assets/images/payment_options/visa.png'}
                width='60px'
                height='10px'
              />
              <Image 
                src={'/static/assets/images/payment_options/mastercard.png'}
                width='45px'
                height='40px'
              />
              <Image 
                src={'/static/assets/images/payment_options/american_express.png'}
                width='45px'
                height='40px'
              />
              <Image 
                src={'/static/assets/images/payment_options/jcb.png'}
                width='60px'
                height='40px'
              />
            </div>
          </div>
          <div className='footer-container-icons-container'>
            <h1>Our Social Medias</h1>
            <div className='footer-container-icons-container-contents'>
              <a href='https://www.facebook.com/Celebrace.tgm/' target='_blank' rel='noreferrer'>
                <BsFacebook className='footer-icons'/>
              </a>
              <AiFillInstagram className='footer-icons'/>
              <AiOutlineTwitter className='footer-icons'/>
            </div>
          </div>
        </div>
        <p>
          2022 Celebrace All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer