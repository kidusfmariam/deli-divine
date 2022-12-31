import React from 'react'
import {motion} from 'framer-motion'
import './AboutUs.css'
const AboutUs = () => {
  return (
    <section className='about-us-wrapper'>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1, delay: 0.4}}

 className='about-us-text'>
            <h1>About Us</h1>
            <p >Welcome to our restaurant! We are a family run establishment with years of experience in the industry. We strive to bring you the freshest, highest quality ingredients and combine them into delicious dishes that will make your mouth water. Our menu consists of both classic and modern recipes that appeal to a wide variety of tastes. Our professional team is always here to assist you and help create the perfect meal for you. Come join us soon, we look forward to serving you!</p>
        </motion.div>

        <div className='about-us-images'>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{delay: 0.4}}
            className='image image-1'>
            <motion.img 
            whileHover={{scale: 1.1}}
            transition={{ease: [0.13, 0.43, 0.23, 0.96]}}
            src="/Assests/About Page/img (1).jpg" alt="image of a food"  />
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{delay: 0.6}}
            className='image image-2'>
            <motion.img 
            whileHover={{scale: 1.1}}
            transition={{ease: [0.13, 0.43, 0.23, 0.96]}}
            src="/Assests/About Page/img (3).jpg" alt="image of a food" />
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{delay: 0.8}}
            className='image image-3'>
            <motion.img 
            whileHover={{scale: 1.1}}
            transition={{ease: [0.23, 0.43, 0.13, 0.96]}}
            src="/Assests/About Page/img (6).jpg" alt="image of a drink"  />
            </motion.div>     
        </div>
    </section>
  )
}

export default AboutUs