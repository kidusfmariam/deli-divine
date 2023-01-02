import React from 'react'
import './Form.css'
import { motion } from 'framer-motion'
const Form = () => {
  return (
    <div className='contact-us-page'>
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1.2, delay: 0.5}}
    className='form-wrapper'>
        <h1>Send Us A Message</h1>
    <div className='form'>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' />
            <label htmlFor="email">Email</label>
            <input type="email" name='email' />
            <label htmlFor="message">Message</label>
            <textarea name="message"></textarea>
            <button type='submit' className='form-btn'>Submit</button>
        </form>
    </div>
    </motion.div>

    <div className='form-img'>
        <motion.img 
        initial={{x: 1000}}
        animate={{x: 0}}
        transition={{duration: 1.5, delay: 0.5}}
        src="/Assests/Contact Page/Img-1.jpg" alt="form-image" />
    </div>
    </div>
  )
}

export default Form