import React from 'react'
import { useStateContext } from '../context/StateContext';

const ContactSubmitted = () => {
  const { showContactSubmitted, setShowContactSubmitted } = useStateContext();
  return (
    <>
      <div className={ showContactSubmitted ? 'fade-in-background' : 'fade-in-background-inactive' }/>
      <div className={ showContactSubmitted ? 'display-block' : 'display-none' }>
        <div className='contact-form-submitted'>
            <h1>
                Contact Form Submitted  
            </h1>
            <p>
              Thank you for sending us a Contacting us!
            </p>
            <p>
              We will notify you via: Email when we respond!
            </p>
            <button onClick={() => setShowContactSubmitted((o) => o = false)}>
                Close
            </button>
        </div>
      </div>
    </>
  )
}

export default ContactSubmitted