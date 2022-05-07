import React from 'react'
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'

// [Pages:]
//
// -Homepage (WIP)
// -Services
// -Delivery
// -About
// -Customer Service
// -Business Profile
// -Contact

const NavBar = () => {
  return (
    <>
        <div className="nav">
            <div>
                <Link href='/'>
                    <a>
                        <div className="nav-bar-logo"></div>
                    </a>
                </Link>
            </div>
            <FaBars className="fa-bars"/>
            <div className="nav-menu">
                <div className="nav-link">
                    <Link href='/about' activestyle>
                        <a>About</a>
                    </Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-link" href='/services' activestyle>
                        <a>Services</a>
                    </Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-link" href='/contact-us' activeStyle>
                        <a>Delivery</a>
                    </Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-link" href='/sign-up' activeStyle>
                        <a>Customer Service</a>
                    </Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-link" href='/sign-up' activeStyle>
                        <a>Business Profile</a>
                    </Link>
                </div>
                <div className="nav-link">
                    <Link className="nav-link" href='/sign-up' activeStyle>
                        <a>Contacte</a>
                    </Link>
                </div>
            </div>
            <div className="nav-btn">

            </div>
        </div>
    </>
  )
}

export default NavBar