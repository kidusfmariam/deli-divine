import React from 'react'
import {motion} from 'framer-motion'
import './Hero.css'
const Hero = () => {
  return (
    <>
    <div className='hero-container'>
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1, delay: 2}}
      className='hero-title'>
        <h1>DELI DIVINE.</h1>
      </motion.div>
      <motion.div
      initial={{opacity: 0}} 
      animate={{opacity: 1}}
      transition={{duration: .6, delay: 2.5}}
      className='hero-text'>
        <p>
        We dedicate ourselves to providing our customers with the widest selection of foods, at the best quality.
        </p>
      </motion.div>
      <motion.div 
      initial={{width: "100%", height: "100%", top: "0", right: "0", pointerEvents: 'none'}}
      animate={{width: "60vw", height: "80%", top: "79vh", right: 0, pointerEvents: 'all'}}
      transition={{duration: 1.6, delay: 0.8}}
      className='hero-img'>
        <img src="/Assests/Landing Page/Img-1.jpg" alt="food on a plate" />
      </motion.div>
    </div>
    </>
  )
}

export default Hero
