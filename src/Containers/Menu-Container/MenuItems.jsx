import React from 'react'
import { useState } from 'react'
import './MenuItems.css'
import {motion} from 'framer-motion'
import {foods} from '../../../Foods'
import FoodCard from '../../Components/FoodCard/FoodCard'
const MenuItems = () => {
    const [data, setData] = useState(foods)
    const filterType = (category) => {
        setData(
          foods.filter((item)=>{
            return item.category === category
          })
        )
      }
  return (
<>
    <div className='menu-header-wrapper'>
        <motion.h1 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.2, delay: 0.2}}
        className='menu-header-title'>OUR MENU</motion.h1>
    <div className='filter'>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.1, delay: 0.3}}

        className='option'
        onClick={() => setData(foods)}
        >
            <span>ALL</span>
        </motion.div>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.1, delay: 0.3}}

        className='option' onClick={() => filterType('Pizza')}>
            <span>pizza</span>
        </motion.div>


        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.1, delay: 0.3}}

        className='option'
        onClick={() => filterType('Burger')}
        >
            <span>burger</span>
        </motion.div>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.1, delay: 0.3}}

        className='option'
        onClick={() => filterType('Pasta')}
        >
            <span>pasta</span>
        </motion.div>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.1, delay: 0.3}}

        className='option'
        onClick={() => filterType('Steak')}
        >
            <span>steak</span>
        </motion.div>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.1, delay: 0.3}}

        className='option'
        onClick={() => filterType('Drink')}
        >
            <span>drinks</span>
        </motion.div>
    </div>
    </div>
    <div 
    className='menu-items-wrapper'>
    {data.map((item, index) => (
            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.2}}
            >
            <FoodCard
            name={item.name}
            image={item.image}
            price={item.price}
            key={index + 1}
            />
            </motion.div>
        ))}
</div>

<blockquote>
    “There is no sincere love than the love of food.”
</blockquote>
</>
  )
}

export default MenuItems