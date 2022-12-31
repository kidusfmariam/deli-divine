import React from 'react'
import {motion} from 'framer-motion'
import './Moto.css'
const Moto = () => {
  return (
    <section className='moto-wrapper'>
        <motion.h1
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1, delay: 0.2}}
        viewport={{once: true}}
        className="about-page-h1"
        >authenticity is our motif</motion.h1>
        <motion.hr 
        initial={{width:0}}
        whileInView={{width: "45vw"}}
        transition={{duration: 1, delay: 0.2}}
        viewport={{once: true}}
        className='hr'
        />
        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1, delay: 0.2}}
        viewport={{once: true}}
        >We offer something special that customers can't get anywhere else, ranging from a unique atmosphere and experience, to excellent food and drink options, or even a collection of aesthetically pleasing décor. Moreover,we also give great customer service that makes us stand out from the crowd by giving our diners not only satisfaction but an overall experience that they won't soon forget.</motion.p>
    </section>
  )
}

export default Moto