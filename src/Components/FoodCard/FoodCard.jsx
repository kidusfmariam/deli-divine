import React from 'react'
import './FoodCard.css'
import {motion} from 'framer-motion'
const FoodCard = ({name, price, image}) => {
  return (
    <motion.div 
    whileHover={{scale: 1.1}}
    transition={{duration: 1, ease: [0.23, 0.43, 0.13, 0.96]}}
    className='food-card-wrapper'>
        <div className='food-img'>
        <img src={image} alt={name} />
        </div>
        
        <div className='food-card-text'>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    </motion.div>
  )
}

export default FoodCard