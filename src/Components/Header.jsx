import React from 'react'
import logo from '../Images/Veganhof-logo.png';
import styles from './Header.module.css';
function Header() {
  return (
    <div>
         <header>
          <div>
          <a href="#"><img src={logo} alt="logo" /></a>
          </div>
          <div>
            <a href="#products">Products</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
          </div>
        </header>
    </div>
  )
}

export default Header