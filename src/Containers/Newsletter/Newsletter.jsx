import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <section className='newsletter-wrapper'>
        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <input type="email" placeholder='Email' />
        <button type='submit'>Subscribe</button>
    </section>
  )
}

export default Newsletter