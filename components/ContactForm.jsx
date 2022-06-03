import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { FaAddressBook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useState } from 'react'
import { ContactSubmitted } from './'

const Contact = () => {
   {/*const [ showContactFormSubmitted, setShowContactFormSubmitted ] = useState(false);{*/}
   return (
      <>
         {/*<ContactSubmitted className={ showContactFormSubmitted ? 'display-block' : 'display-none' }/>*/}
         <div className='container'>
            <div className='contact-container'>
               <div className='contact-information'>
                  <div>
                     <p className='contact-information-titles'>
                        <span><FaAddressBook className='contact-icon'/></span>Address
                     </p>
                     <p className='contact-information-details'> 
                        Villa Verde Subdivision, Tagum City,
                        <br />
                        Davao Del norte
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
                     <button onClick={() => setShowContactFormSubmitted((o) => !o)}>Submit</button>
                  </div>
               </div>
            </div> 
         </div>
      </>
   )
}

export default Contact