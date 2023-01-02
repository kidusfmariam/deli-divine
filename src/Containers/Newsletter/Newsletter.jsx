import React from 'react'
import { motion } from 'framer-motion'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <section className='newsletter-wrapper'>
      <img src="/Assests/Contact Page/Img-2.jpg" alt="burger" className='bg-img' />
        <motion.h1
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.2, delay: 0.3}}
        viewport={{once: true}}
        >SUBSCRIBE TO OUR NEWSLETTER</motion.h1>
        <motion.input 
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 1.4, delay: 0.4}}
        type="email" placeholder='Email' />
        <motion.button 
        initial={{opacity: 0, y: 200}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 1.4, delay: 0.8}}
        type='submit'>Subscribe</motion.button>
    </section>
  )
}

export default Newsletter