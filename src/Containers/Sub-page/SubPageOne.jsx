import React from 'react'
import {motion} from 'framer-motion'
import './SubPageOne.css'

const SubPageOne = () => {
  return (
    <>
    <section className='subpage-wrapper'>
      <div className='subpage-img-container'>
        <motion.div 
        initial={{width: "100%"}}
        whileInView={{width: 0}}
        transition={{duration: 1.2, delay: 0.5}}
        viewport={{once: true}}
        className='subpage-overlay'></motion.div>
        <img src="/Assests/Landing Page/Img-2.jpg" alt="shrimp served on plate" className='subpage-img' />
      </div>
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.2, delay: 0.5}}
        viewport={{once: true}}
      className='subpage-content-container'>
        <h2 className='subpage-title'>Fine <br />Dining</h2>
        <p className='subpage-content-paragraph'>Indulge your senses in the best cuisine the world has to offer. Make memories with your loved ones.  </p>
        <button>Explore our menu</button>
      </motion.div>
    </section>

    <section className='subpage-wrapper-2'>
        <div className='subpage-img-container-2'>
            <motion.img 
            initial={{height: 0}}
            whileInView={{height: "100%"}}
            transition={{duration: 1.3, delay: 0.7}}
            viewport={{once: true}}
            src="/Assests/Landing Page/Img-3.jpg" alt="image of a sushi" className='subpage-img' />
        </div>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.2, delay: 0.7}}
        viewport={{once: true}}
        className='subpage-content-container-2'>
            <h1 className='subpage-title'>Serving with <br /> Passion</h1>
            <p className='subpage-content-paragraph'>We have been serving our customers for the past 7 years. We are dedicated to elevating your dining experience into new heights.  With a diverse cuisine and dedicated staff, our customers will get an experience of a lifetime every time they visit us.  </p>
            <button>Learn more about us</button>
        </motion.div>
    </section>
    </>
  )
}

export default SubPageOne
