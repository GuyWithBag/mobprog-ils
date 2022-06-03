import React from 'react'
import Link from 'next/link';
import * as AiIcons from 'react-icons/ai'

const Sidebar = ( active ) => {
  return (
    <nav className={active}>
        <ul className='sidenav-menu-items'>
            <li className='navbar-toggle'>
                <Link to='#'className='menu-bars'>
                    <AiIcons.AiOutlineClose/>
                </Link>
            </li>
            <div className="nav-link">
                <Link href='/' activestyle>
                    <a>Home</a>
                </Link>
            </div>
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
                <Link className="nav-link" href='/delivery' activeStyle>
                    <a>Delivery</a>
                </Link>
            </div>
            <div className="nav-link">
                <Link className="nav-link" href='/customer-service' activeStyle>
                    <a>Customer Service</a>
                </Link>
            </div>
            <div className="nav-link">
                <Link className="nav-link" href='/business-profile' activeStyle>
                    <a>Business Profile</a>
                </Link>
            </div>
            <div className="nav-link">
                <Link className="nav-link" href='/contact' activeStyle>
                    <a>Contact</a>
                </Link>
            </div>
        </ul>
    </nav>
  )
}

export default Sidebar