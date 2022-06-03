import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useStateContext } from '../context/StateContext'
import { AiOutlineShopping } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { Cart } from '.';

const Sidebar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    const [ showSidebar, setShowSidebar ] = useState(false)
    return (
        <>
            <button type='button' className='navbar-fa-bars-container' onClick={() => setShowSidebar((o) => !o)}>
                <FaBars className='navbar-fa-bars'/>
            </button>
            <div className={showSidebar ? 'sidenav-menu sidenav-menu-active' : 'sidenav-menu '}>
                <ul className='sidenav-menu-items'>
                    <div className='sidenav-cart-link'>
                        <button type='button' className='sidenav-cart-icon' onClick={() => setShowCart(true)}>
                            <AiOutlineShopping />
                            <span className='cart-item-qty'>{totalQuantities}</span>
                        </button>
                    </div>
                    {showCart && <Cart />}
                    <div className='sidenav-link'>
                        <Link href='/' activestyle>
                            <a className='sidenav-link-text'>Home</a>
                        </Link>
                    </div>
                    <div className='sidenav-link'>
                        <Link href='/about' activestyle>
                            <a className='sidenav-link-text'>About</a>
                        </Link>
                    </div>
                    <div className='sidenav-link'>
                        <Link className='sidenav-link' href='/services' activestyle>
                            <a className='sidenav-link-text'>Services</a>
                        </Link>
                    </div>
                    <div className='sidenav-link'>
                        <Link className='sidenav-link' href='/delivery' activeStyle>
                            <a className='sidenav-link-text'>Delivery</a>
                        </Link>
                    </div>
                    <div className='sidenav-link'>
                        <Link className='sidenav-link' href='/customer-service' activeStyle>
                            <a className='sidenav-link-text'>Customer Service</a>
                        </Link>
                    </div>
                    <div className='sidenav-link'>
                        <Link className='sidenav-link' href='/contact' activeStyle>
                            <a className='sidenav-link-text'>Contact</a>
                        </Link>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Sidebar