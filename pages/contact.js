import React from 'react'

const contact = () => {
  return (
    <div class="container">
    <div class="contact-me">
       <div class="contact-info info1">
          <p>
             <i class="fas fa-map-marker-alt"></i> Address <br />
             <span> kkkkk
             <br />
            kkkk
             </span>
          </p>
          <p>
             <i class="fas fa-phone-alt"></i> Let's Talk <br />
             <span> 0910</span>
          </p>
          <p>
             <i class=" far fa-envelope"></i> Email <br />
             <span>contact@example.com</span>
          </p>
       </div>
       <div class="contact-info info2">
          <div class="inside-contact">
             <h2>Contact Us</h2>
             <h3>
               <span id="confirm"></span>
            </h3>
             <p>Name *</p>
             <input id="txt_name" type="text" Required="required">
             <p>Email *</p>
             <input id="txt_email" type="text" Required="required">
             <p>Phone *</p>
             <input id="txt_phone" type="text" Required="required">
             <p>Subject *</p>
             <input id="txt_subject" type="text" Required="required">
             <p>Message *</p>
             <textarea id="txt_message" rows="4" cols="20" Required="required" ></textarea>
             <input type="submit" id="btn_send" value="SEND">
          
          </input>
       </input>
    </input>
 </input>
 </input>

 </div>
 </div>
 </div>
 </div>
 )
}

export default contact