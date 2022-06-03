import React from 'react'
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from '.';
import { useStateContext } from '../context/StateContext';
import Image from 'next/image'
import { useState } from 'react'
import { Sidebar } from '../components'

// [Pages:]
//
// -Homepage (WIP)
// -Services
// -Delivery
// -About
// -Customer Service
// -Business Profile
// -Contact

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    const [ showSidebar, setShowSidebar ] = useState(false)
    return (
        <>
            <div className='nav'>
                <div>
                    <Link href='/'>
                        <a>
                            <Image 
                            src={'/static/assets/images/designs/celebrace_logo.png'}
                            width='200px'
                            height='96px'
                            />
                        </a>
                    </Link>
                </div>
                <button type='button' className='' onClick={() => setShowSidebar((o) => !o)}>
                    <FaBars className='fa-bars'/>
                </button>
                <Sidebar active={showSidebar ? 'side-nav-menu active' : 'sidenav-menu'}/>
                <div className='nav-menu'>
                    <div className='nav-link'>
                        <Link href='/' activestyle>
                            <a>Home</a>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link href='/about' activestyle>
                            <a>About</a>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link className='nav-link' href='/services' activestyle>
                            <a>Services</a>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link className='nav-link' href='/delivery' activeStyle>
                            <a>Delivery</a>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link className='nav-link' href='/customer-service' activeStyle>
                            <a>Customer Service</a>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link className='nav-link' href='/contact' activeStyle>
                            <a>Contact</a>
                        </Link>
                    </div>
                </div>
                <div className='nav-btn'>
                    <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
                        <AiOutlineShopping />
                        <span className='cart-item-qty'>{totalQuantities}</span>
                    </button>
                </div>

                {showCart && <Cart />}
            </div>
        </>
  )
}

export default Navbar