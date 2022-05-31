import React from 'react'

const delivery = () => {
  return (
    <section className="order" id="order">

    <h3 className="sub-heading">Oder Now!</h3>
    <h1 className="heading">Free and Fast</h1>

    <form action="">

        <div className="inputBox">
            <div className="input">
                <span>Your Name</span>
                <input type="text" placeholder="Enter your name"></input>
            </div>
            <div className="input">
                <span>Your Number</span>
                <input type="text" placeholder="Enter your number"></input>
            </div>
        </div>

        <div className="inputBox">
            <div className="input">
                <span>Your Order</span>
                <input type="text" placeholder="Enter order name"></input>
            </div>
            <div className="input">
                <span>Additional order</span>
                <input type="test" placeholder="Extra order"></input>
            </div>
        </div>

        <div className="inputBox">
            <div className="input">
                <span>How Much?</span>
                <input type="number" placeholder="How many orders"></input>
            </div>
            <div className="input">
                <span>Date and Time</span>
                <input type="datetime-local"></input>
            </div>
        </div>

        <div className="inputBox">
            <div className="input">
                <span>Your Address</span>
                <textarea name="" placeholder="enter your address" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="input">
                <span>Your Message</span>
                <textarea name="" placeholder="enter your message" id="" cols="30" rows="10"></textarea>
            </div>
        </div>

        <button onClick="submitF()" className="btn">Submit Now</button>

    </form>
</section>
  )
}

export default delivery