import React from 'react';
import Image from 'next/image'

const About = () => {
  return (
    <>  
        <div className="about" id="about">
            <h3 className="sub-heading">About Us</h3>
            <h1 className="heading">Why Choose Us?</h1>

            <div className="row">

                <div className="image">
                    <Image src="/static/assets/images/flowers/products.png" alt="Flower product"
                    width='600px'
                    height='600px'
                    />
                </div>

                <div className="content">
                    <h3>BEST COMPANION FOR SPECIAL OCCASION </h3>
                    <p className="text">The reason you should pick us to be part of your
                       special occasion is that we offer budget-friendly
                       products that would part in your surprises.Also,we
                       offer free delivery in any part of Tagum City. </p>  <span className="moreText">
                    <p>We also accept any specific designs that you want
                       in your products.You're loved ones will appreciate
                       your surprise bouquet because all of our flowers are
                       fresh and carefully picked by us.Our service for
                       accepting orders is 24/7.</p> 
                    
                    <div className="icons-container">
                        <div className="icons">
                            <i className="fas fa-shipping-fast"></i>
                            <span>Free Delivery</span> 
                        </div>
                        <div className="icons">
                            <i className="fas fa-dollar-sign"></i>
                            <span>Easy Payments</span> 
                        </div>
                        <div className="icons">
                            <i className="fas fa-headset"></i>
                            <span>24/7 service</span> 
                        </div>
                    </div> </span>
                    <button className="read-more-btn">Read More</button>
                </div>
            </div>
        </div> 
    </>
  )
}

export default About;