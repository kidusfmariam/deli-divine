import React from 'react'
import {CiFacebook, CiInstagram, CiTwitter, CiYoutube} from 'react-icons/ci'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className='footer-row-1'>
        <img src="/Assests/Footer/footer-logo.png" alt="footer-logo" className='footer-logo' />
        <div className='socials-icons'>
            <CiFacebook className='social-icon'/>
            <CiInstagram className='social-icon'/>
            <CiTwitter className='social-icon'/>
            <CiYoutube className='social-icon'/>
        </div>
      </div>

      <div className='footer-row-2'>
        <div className='footer-col'>
            <h6>Useful Links</h6>
            <p>HOME</p>
            <p>ABOUT</p>
            <p>MENU</p>
            <p>CONTACT</p>
        </div>

        <div className='footer-col'>
            <h6>Socials</h6>
            <p>FACEBOOK</p>
            <p>INSTAGRAM</p>
            <p>TWITTER</p>
            <p>YOUTUBE</p>
        </div>

        <div className='footer-col'>
            <h6>Privacy</h6>
            <p>Terms of use</p>
            <p>Privacy Policy</p>
            <p>Accessibility</p>
        </div>
      </div>

      <h3 className='copyright'>Designed and developed by <a href="https://github.com/kidusfmariam" target="_blank">Kidus Ayalew</a></h3>
    </footer>
  )
}

export default Footer
