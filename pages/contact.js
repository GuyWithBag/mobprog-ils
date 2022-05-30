import React from 'react'

const contact = () => {
  return (
    <div className="container">
      <div className="contact-me">
         <div className="contact-info info1">
            <p>
               <i className="fas fa-map-marker-alt"></i> Address <br />
               <span> kkkkk
               <br />
               kkkk
               </span>
            </p>
            <p>
               <i className="fas fa-phone-alt"></i> Let&apos;s Talk <br />
               <span> 09483182462 - <b>SMART</b> </span>
            </p>
            <p>
               <i className=" far fa-envelope"></i> Email <br />
               <span>celebracetgm@gmail.com </span>
            </p>
         </div>
         <div className="contact-info info2">
            <div className="inside-contact">
               <h2>Contact Us</h2>
               <h3>
                  <span id="confirm"></span>
               </h3>
               <p>Name *</p>
               <input id="txt_name" type="text" Required="required"/>
               <p>Email *</p>
               <input id="txt_email" type="text" Required="required"/>
               <p>Phone *</p>
               <input id="txt_phone" type="text" Required="required"/>
               <p>Subject *</p>
               <input id="txt_subject" type="text" Required="required"/>
               <p>Message *</p>
               <textarea id="txt_message" rows="4" cols="20" Required="required" ></textarea>
               <input type="submit" id="btn_send" value="SEND"/>
            </div>
         </div>
      </div> 
   </div>
 )
}

export default contact