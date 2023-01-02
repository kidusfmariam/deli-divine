import React from 'react'
import './FoodCard.css'
import {motion} from 'framer-motion'
const FoodCard = ({name, price, image}) => {
  return (
    <div className='food-card-wrapper'>
        <div className='food-img'>
        <img src={image} alt={name} />
        </div>
        
        <div className='food-card-text'>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default FoodCard