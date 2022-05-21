import React from 'react';

const About = () => {
  return (
    <>  
        <section class="about" id="about">
            <h3 class="sub-heading">About Us</h3>
            <h1 class="heading">Why Choose Us?</h1>

            <div class="row">

                <div class="image">
                    <img src="images/about-img.png" alt=""/>
                </div>

                <div class="content">
                    <h3>Best Food in Town</h3>
                    <p class="text">The reason why you should choose us in terms of ordering your food is that
                    we serve it delicously and we serve it neatly to our valued customer which is you. Also, 
                    we deliver very fast and we are open 24/7. </p>  <span class="moreText">
                    <p>We also offer the very loved Filipino dishes around the country, we cook it with love and care. 
                    You might be able to taste that love and care we put for the food we offer. 
                    That's why you should choose us when buying your meal.</p> 
                    
                    <div class="icons-container">
                        <div class="icons">
                            <i class="fas fa-shipping-fast"></i>
                            <span>Free Delivery</span> 
                        </div>
                        <div class="icons">
                            <i class="fas fa-dollar-sign"></i>
                            <span>Easy Payments</span> 
                        </div>
                        <div class="icons">
                            <i class="fas fa-headset"></i>
                            <span>24/7 service</span> 
                        </div>
                    </div> </span>
                    <button class="read-more-btn">Read More</button>
                </div>
            </div>
  </section> *
    </>
  )
}

export default About;