import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { FaAddressBook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const contact = () => {
  return (
    <div className='container'>
      <div className='contact-container'>
         <div className='contact-information'>
            <div>
               <p className='contact-information-titles'>
                  <span><FaAddressBook className='contact-icon'/></span>Address
               </p>
               <p className='contact-information-details'> 
                  kkkkk
                  <br />
                  kkkk
               </p>
            </div>
            <div>
               <p className='contact-information-titles'>
                  <span><AiFillPhone className='contact-icon'/></span>Let&apos;s Talk
               </p>
               <p className='contact-information-details'> 09483182462 - <b>SMART</b> </p>
            </div>
            <div>
               <p className='contact-information-titles'>
                  <span><MdEmail className='contact-icon'/></span>Email
               </p>
               <p className='contact-information-details'>celebracetgm@gmail.com </p>
            </div>
         </div>
         <div className='contact-information-inputs'>
            <div className='contact-information-inputs-contents'>
               <h2>Contact Us</h2>

               <b className='contact-information-inputs-titles'>Name *</b>
               <input id='txt_name' type='text' Required='required'/>
               <b className='contact-information-inputs-titles'>Email *</b>
               <input id='txt_email' type='text' Required='required'/>
               <b className='contact-information-inputs-titles'>Phone *</b>
               <input id='txt_phone' type='text' Required='required'/>
               <b className='contact-information-inputs-titles'>Subject *</b>
               <input id='txt_subject' type='text' Required='required'/>
               <b className='contact-information-inputs-titles'>Message *</b>
               <textarea id='txt_message' rows='4' cols='20' Required='required' ></textarea>
               <input type='submit' id='btn_send' value='SUBMIT'/>
            </div>
         </div>
      </div> 
   </div>
 )
}

export default contact