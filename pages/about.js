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
                    <h3>Best Food in Town</h3>
                    <p className="text">The reason why you should choose us in terms of ordering your food is that
                    we serve it delicously and we serve it neatly to our valued customer which is you. Also, 
                    we deliver very fast and we are open 24/7. </p>  <span className="moreText">
                    <p>We also offer the very loved Filipino dishes around the country, we cook it with love and care. 
                    You might be able to taste that love and care we put for the food we offer. 
                    That&apos;s why you should choose us when buying your meal.</p> 
                    
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