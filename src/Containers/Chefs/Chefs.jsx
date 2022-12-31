import React from 'react'
import './Chefs.css'
import {motion} from 'framer-motion'
const Chefs = () => {
  return (
    <div className='chefs-wrapper'>
        <h1 className='about-page-h1'>Our Chefs</h1>
        <motion.hr 
        initial={{width:0}}
        whileInView={{width: "45vw"}}
        transition={{duration: 1, delay: 0.2}}
        viewport={{once: true}}
        className='hr'
        />

        <div className='chefs-list'>
            <div className='chef chef-1'>
                <motion.img
                initial={{opacity: 0, rotateY: '90deg'}}
                whileInView={{opacity: 1, rotateY: 0}}
                transition={{duration: 1, delay: 0.2}}
                viewport={{once: true}}
                src="/Assests/About Page/img (4).jpg" alt="chef reagan clayton" />
                <motion.p
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1, delay: 0.2}}
                viewport={{once: true}}
                >Reagan Clayton</motion.p>
            </div>

            <div className='chef chef-2'>
                <motion.img
                initial={{opacity: 0, rotateY: '90deg'}}
                whileInView={{opacity: 1, rotateY: 0}}
                transition={{duration: 1, delay: 0.4}}
                viewport={{once: true}}
                src="/Assests/About Page/img (2).jpg" alt="chef rania caldwell" />
                <motion.p
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1, delay: 0.4}}
                viewport={{once: true}}
                >Rania Caldwell</motion.p>
            </div>

            <div className='chef chef-3'>
                <motion.img
                initial={{opacity: 0, rotateY: '90deg'}}
                whileInView={{opacity: 1, rotateY: 0}}
                transition={{duration: 1, delay: 0.6}}
                viewport={{once: true}}
                src="/Assests/About Page/img (5).jpg" alt="chef roger montes" />
                <motion.p
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1, delay: 0.6}}
                viewport={{once: true}}
                >Roger Montes</motion.p>
            </div>
        </div>
    </div>
  )
}

export default Chefs