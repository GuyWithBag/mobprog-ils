import React from 'react'
import Image from 'next/image'

const businessProfile = () => {
  return (
    <div className="about" id="about">
            <h3 className="sub-heading">Business-Profile</h3>
            <h1 className="heading">Manager</h1>

            <div className="row">

                <div className="image">
                    <Image src="/static/assets/images/business profile images/" alt=""
                    width='600px'
                    height='600px'
                    />
                </div>

                <div className="content">
                    <h3>ERIKA FRANCES E. RACACHO </h3>
                    <p className="text"> </p>

    <div className="about1" id="about1">
    <h3 className="sub-heading">Business-Profile</h3>
    <h1 className="heading">Manager</h1>

    <div className="row">

        <div className="image">
            <Image src="/static/assets/images/business profile images/" alt=""
            width='600px'
            height='600px'
            />
        </div>

        <div className="content">
            <h3>ERIKA FRANCES E. RACACHO </h3>
            <p className="text"> </p>
</div>
</div>
</div>
</div>
</div>
</div>
                     
  )
}

export default businessProfile