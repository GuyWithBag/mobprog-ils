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
        <p class="text">
            Celebrace is a budget-family-friendly business that helps you to commemorate memorable occasions like 
            birthdays, anniversaries, and other special events.Celebrace offers you fast-affordable products with 
            a wide range of presents and services such as Customize Bouquets, Balloon arrangements, invitations, 
            ref magnets, etc.It also helps your family, friends,  and loved ones celebrate their special occasion 
            with occasional unforgettable presents to make their day more extraordinary
        </p>  
        <span class="moreText">
        <p>
            We also offer the very loved Filipino dishes around the country, we cook it with love and care. 
        You might be able to taste that love and care we put for the food we offer. 
        That's why you should choose us when buying your meal.
        </p> 
        
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
        </div> 
    </span>
        <button class="read-more-btn">Read More</button>
    </div>
</div>
</section>
    </>
  )
}

export default About;