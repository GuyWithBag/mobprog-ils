import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { FaAddressBook } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useStateContext } from '../context/StateContext';
import { ContactSubmitted } from './'

const Contact = () => {
   const { showContactSubmitted, setShowContactSubmitted } = useStateContext();
   async function handleOnSubmit(e) {
      alert('naosdasdasdsad')
      e.preventDefault();
  
      const formData = {};
  
      Array.from(e.currentTarget.elements).forEach(field => {
        if ( !field.name ) return;
        formData[field.name] = field.value;
      });
  
      await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
    }
   return (
      <>
         <ContactSubmitted className={ showContactSubmitted ? 'display-block' : 'display-none' }/>
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
                     <p className='contact-information-details'> 09483182462 - <label>SMART</label> </p>
                  </div>
                  <div>
                     <p className='contact-information-titles'>
                        <span><MdEmail className='contact-icon'/></span>Email
                     </p>
                     <p className='contact-information-details'>celebracetgm@gmail.com</p>
                  </div>
               </div>
               <div className='contact-information-inputs'>
                  <div className='contact-information-inputs-contents'>
                     <h2>Contact Us</h2>
                     <form className='contact-information-inputs-contents-form' method='post' onSubmit={handleOnSubmit}>
                        <label htmlFor='name' className='contact-information-inputs-titles'>Name *</label>
                        <input id='txt_name' type='text' name='name' required='required'/>
                        <label htmlFor='email' className='contact-information-inputs-titles'>Email *</label>
                        <input id='txt_email' type='email' name='email' required='required'/>
                        <label htmlFor='phone_number' className='contact-information-inputs-titles'>Phone Number *</label>
                        <input id='txt_phone' type='text' name='phone_number' required='required'/>
                        <label htmlFor='subject' className='contact-information-inputs-titles'>Subject *</label>
                        <input id='txt_subject' type='text' name='subject' required='required'/>
                        <label htmlFor='message' className='contact-information-inputs-titles'>Message *</label>
                        <textarea id='txt_message' rows='4' cols='20' name='message' required='required' ></textarea>
                     </form>
                     <button onClick={() => setShowContactSubmitted((o) => !o)}>Submit</button>
                  </div>
               </div>
            </div> 
         </div>
      </>
   )
}

export default Contact