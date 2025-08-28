import React from 'react'
import Img1 from '../assets/coffee-white.png'
import Img2 from '../assets/coffee2.png'
import MatchaImg from '../assets/matcha.jpg'
import ColdCoffeeImg from '../assets/coldcoffee.jpg'
import MochaImg from '../assets/Mocha Coffee.jpg'
import FrappeImg from '../assets/frappe.jpg'
import { motion } from 'framer-motion'

const MenuData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    price: "₹350",
    description: "Strong and bold espresso shot to kickstart your day."
  },
  {
    id: 2,
    img: Img1,
    name: "Americano",
    price: "₹235",
    description: "Smooth Americano with rich flavor and aroma."
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    price: "₹550",
    description: "Creamy and frothy cappuccino topped with cinnamon."
  },
  {
    id: 4,
    img: MatchaImg,
    name: "Matcha",
    price: "₹450",
    description: "Refreshing green tea matcha latte with a smooth finish."
  },
  {
    id: 5,
    img: ColdCoffeeImg,
    name: "Cold Coffee",
    price: "₹300",
    description: "Chilled cold brew coffee with milk and sugar."
  },
  {
    id: 6,
    img: MochaImg,
    name: "Mocha",
    price: "₹400",
    description: "Chocolate infused mocha with whipped cream topping."
  },
  {
    id: 7,
    img: FrappeImg,
    name: "Frappuccino",
    price: "₹480",
    description: "Iced and blended frappuccino with a sweet twist."
  },
];

const Menu = () => {
  return (
    <div id='menu' className='py-20 bg-[#fefaf5]'>
      <div className='max-w-7xl mx-auto px-4'>
        
        {/* Heading */}
        <div className='text-center mb-16'>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className='text-4xl font-bold font-cursive text-amber-900'
          >
            Best Coffee for You
          </motion.h1>
          <p className="text-gray-600 mt-4 text-lg">Choose from our wide variety of handcrafted coffee.</p>
        </div>

        {/* Menu Cards */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center'
        >
          {MenuData.map((menu) => (
            <div
              key={menu.id}
              className='rounded-2xl bg-white hover:bg-amber-900 transition-all hover:text-white shadow-lg duration-300 group max-w-[300px] w-full p-6'
            >
              {/* Image */}
              <div className='flex justify-center mb-6'>
                <img
                  src={menu.img}
                  alt={menu.name}
                  className='w-28 h-28 object-cover rounded-full shadow-md group-hover:scale-105 duration-300'
                />
              </div>

              {/* Content */}
              <div className='text-center'>
                <h1 className='text-2xl font-bold mb-2'>{menu.name}</h1>
                <p className='text-gray-500 group-hover:text-white duration-300 text-sm mb-4 h-12'>
                  {menu.description}
                </p>
                <div className='flex justify-between items-center'>
                  <p className='text-lg font-semibold'>{menu.price}</p>
                  <button className='bg-amber-900 text-white px-3 py-2 rounded-md group-hover:bg-white group-hover:text-amber-900 transition-all'>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Menu;