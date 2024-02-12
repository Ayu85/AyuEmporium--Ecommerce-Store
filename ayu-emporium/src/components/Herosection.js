import React from 'react'
import heroImg from '../assets/heroImg3.png'
import Header from './Header'
const Herosection = () => {
  return (
    <div className=' flex flex-col gap-16 justify-center items-center  h-[100vh] bg-[#FFB71B] '>
      <Header />
      <div className='flex items-center justify-between  w-[75%]'>
        <div className='text-black z-50'>
          {
            ['Shop', 'Click', 'Thrive:Your E-Commerce Destination'].map((items, key) => {
              return <h1 className={`text-7xl hero_title py-1
               ${key === 1 && 'text-[#F7221E] w-[500px] text-6xl'}
                 ${key === 2 && 'text-white w-[550px] text-4xl tracking-wider'}`}>{items}</h1>
            })
          }
        </div>
        <div className='-mr-16 -mt-24'>
          <img src={heroImg} alt='logo' className='w-[400px]' />
        </div>
      </div>
    </div>
  )
}

export default Herosection
