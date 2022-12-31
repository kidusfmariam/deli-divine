import React from 'react'
import deliLogo from '/Assests/Navbar/deli..png'
import menuIcon from '/Assests/Navbar/Group 1.png'
import closeBtn from '/Assests/Navbar/Group 2.png'
import './Navbar.css'
import { useState } from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false);
  return (
    <>
    <motion.nav 
    initial={{opacity: 0, y: -50}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1, delay: 3}}
    className='navbar-container'
    >
      <div className='nav-item logo'>
        <img src={deliLogo} alt="deli-divine-logo" className='nav-img-1' />
      </div>
      <div className='nav-item menu-btn'  onClick={() => setNav(!nav)}>
        <img src={menuIcon} alt="menu-button" className='nav-img-2' />
      </div>
    </motion.nav>

    <motion.div 
    initial={{y: "-400%"}}
    animate={{ y:  nav ? 0 : "-400%"}}
    transition={{duration: 1.3, ease: "easeInOut"}}
    className='nav-menu'>
        <img src={closeBtn} alt="close" className='close-btn' onClick={() => setNav(!nav)} />
        <motion.div
        initial={{pointerEvents: 'none'}}
        animate={{pointerEvents: 'all'}}
        transition={{delay: 2}}
        >
        <Link to="/">
        <motion.div 
        className='menu-item menu-item-1'
        initial={{opacity: 0, y:100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1, delay: 0.2}}
        onClick={() => setNav(!nav)}
        >
            <h1 className='menu-title'>HOME</h1>
            <img className='menu-img menu-img-1' src="/Assests/Navbar/home.png" alt="home" />
        </motion.div>
        </Link>


       <Link to='/about'> 
       <motion.div 
        className='menu-item menu-item-2'
        initial={{opacity: 0, y:100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1, delay: 0.4}}
        onClick={() => setNav(!nav)}>
            <h1 className='menu-title'>ABOUT</h1>
            <img className='menu-img menu-img-2' src="/Assests/Navbar/about.png" alt="about" />
        </motion.div></Link>



        <motion.div 
        className='menu-item menu-item-3'
        initial={{opacity: 0, y:100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1, delay: 0.6}}
        onClick={() => setNav(!nav)}>
            <h1 className='menu-title'>MENU</h1>
            <img className='menu-img menu-img-3' src="/Assests/Navbar/menu.png" alt="menu" />
        </motion.div>
        <motion.div 
        className='menu-item menu-item-4'
        initial={{opacity: 0, y:100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1, delay: 0.8}}
        onClick={() => setNav(!nav)}>
            <h1 className='menu-title'>CONTACT</h1>
            <img className='menu-img menu-img-4' src="/Assests/Navbar/contact.png" alt="contact" />
        </motion.div>
        </motion.div>
    </motion.div>
    </>
  )
}

export default Navbar
