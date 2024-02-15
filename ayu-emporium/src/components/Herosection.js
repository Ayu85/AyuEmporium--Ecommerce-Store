import React from 'react'
import heroImg from '../assets/heroImg3.png'
import Header from './Header'
import { motion } from 'framer-motion'
import blob from '../assets/blob vector.png'
import { useLocation } from 'react-router-dom'
const Herosection = () => {

  return (
    <div className=' flex relative flex-col gap-16 justify-center items-center  h-[110vh] bg-[#FFB71B] '>
      <Header />
      {/* <img src='https://cdn.shopify.com/s/files/1/0393/0007/1555/files/christmas_elements-desktop.png?v=1701336847' */}
      {/* alt='bg' className='absolute -z-0' /> */}
      <div className='flex lg:flex-nowrap md:flex-nowrap flex-wrap items-center lg:justify-between md:justify-between sm:mt-20 justify-center  w-[75%]'>
        <div className='text-black text-center lg:text-start md:text-start'>
          {
            ['Shop', 'Click', 'Thrive:Your E-Commerce Destination'].map((items, key) => {
              return <h1 className={`lg:text-6xl md:text-5xl text-4xl  hero_title py-3
               ${key === 1 && 'text-[#F7221E]  lg:text-6xl md:5xl'}
                ${key === 2 && 'text-white lg:w-[550px] w-96 lg:text-4xl md:xl tracking-wider'}`}>
                <motion.span
                  id='square' className={`${key === 1 && 'bg-[#F7221E] lg:pl-44 lg:h-24 md:pl-32 md:h-14 '}`}></motion.span>{items}</h1>
            })
          }
        </div>
        <div className='-mr-16 mt-10 relative w-[450px] hidden md:block lg:block'>
          <img src={heroImg} alt='logo' className='w-[450px] z-50 relative' />
          <img src={blob} alt='blob' className='hidden md:block lg:block absolute w-[450px] lg:top-44 md:top-20  z-10 animate-[spin_linear_3s_infinite]' />
        </div>
      </div>
    </div>
  )
}

export default Herosection
