import React from 'react'

const contact = () => {
  return (
    <section id="contact">
      <div className="column">
      <h3>CONTACT FORM</h3>
      <form action="/action_page.php">
      <label for="fname">Name:</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      <div className="row">
          <label for="lname">Phone#.:</label>
          <input type="number"  placeholder="Phone no."></input>
      </div>
      <div className="row">
          <label for="lname">Email:</label>
          <input type="email" placeholder="Email"></input>
      </div>
          <label for="subject">Message:</label>
          <textarea id="Message" name="Message" placeholder="Message" style="height:50px"></textarea> 
      </form>
          <div id="Submit" button className="btn">Submit</div>
      </div>
        <div className="column">
          <h3>MY CONTACT DETAILS</h3>
        </div>
      <br>
        <div className="row">
          <i className="fa fa-fw fa-map-marker" style="width:30px"></i> Tagum City, Davao del Norte, Philippines
        </div>
      </br>
      <br>
        <div className="row">
                <i className="fa fa-fw fa-phone" style="width:30px"></i><br> Phone:09</br>
        </div>
      </br>
      <br>
        <div className="s">
                <i className="fa fa-fw fa-envelope" style="width:30px"></i> Email:z@gmail.com
        </div>
      </br>
      <br>
        <div className="row">
          <div className="column">
            <img src="../assets\images\flowers\Balloon hug.png" style="width:130%"/>
          </div>
        </div>
      </br>
    </section>
  )
}

export default contact