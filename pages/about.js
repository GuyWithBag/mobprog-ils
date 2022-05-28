import React from 'react';
import Image from 'next/image'

const About = () => {
  return (
    <>  
        <div className="about">
            <h3 className="about-sub-heading">About Us</h3>
            <h1 className="about-heading">Why Choose Us?</h1>
            <div className="about-row">
                <div className="about-image">
                    <Image src="/static/assets/images/flowers/products.png" alt="Flower product"
                    width='400px'
                    height='400px'
                    />
                </div>
                <div className="about-content">
                    <h3>BEST COMPANION FOR SPECIAL OCCASION</h3>
                    <p className="about-text">
                        Celebrace is a budget-family-friendly business that helps you to commemorate memorable occasions like birthdays, anniversaries, and other special events. 
                    </p>  
                    <span className="about-moreText">
                        <p>
                            Celebrace offers you fast-affordable products with a wide range of presents and services such as Customize Bouquets, Balloon arrangements, invitations, ref magnets, etc.It also helps your family, friends,  and loved ones celebrate their special occasion with occasional unforgettable presents to make their day more extraordinary 
                        </p>
                        {/*<div className="icons-container">
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
                        </div> */}
                    </span>
                    <button className="about-read-more-btn">Read More</button>
                </div>
            </div>
        </div> 
    </>
  )
}

export default About;