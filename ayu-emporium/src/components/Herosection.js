import React from 'react'
import heroImg from '../assets/heroImg3.png'
import Header from './Header'
import { motion } from 'framer-motion'
import blob from '../assets/blob vector.png'
const Herosection = () => {

  return (
    <div className=' flex  flex-col gap-16 justify-center items-center  h-[110vh] bg-[#FFB71B] '>
      <Header />
      {/* <img src='https://cdn.shopify.com/s/files/1/0393/0007/1555/files/christmas_elements-desktop.png?v=1701336847' */}
      {/* alt='bg' className='absolute -z-0' /> */}
      <div className='flex items-center justify-between  w-[75%]'>
        <div className='text-black '>
          {
            ['Shop', 'Click', 'Thrive:Your E-Commerce Destination'].map((items, key) => {
              return <h1 className={`text-7xl hero_title py-3
               ${key === 1 && 'text-[#F7221E]  text-6xl'}
                ${key === 2 && 'text-white w-[550px] text-4xl tracking-wider'}`}>
                <motion.span
                  id='square' className={`${key === 1 && 'bg-[#F7221E] pl-44 h-24 '}`}></motion.span>{items}</h1>
            })
          }
        </div>
        <div className='-mr-16 mt-10 relative'>
          <img src={heroImg} alt='logo' className='w-[450px] z-50 relative' />
          <img src={blob} alt='blob' className='absolute w-[450px] top-52  z-10 animate-[spin_linear_3s_infinite]'/>
        </div>
      </div>
    </div>
  )
}

export default Herosection
