import React from 'react'
import heroImg from '../assets/heroImg.png'
import Header from './Header'
const Herosection = () => {
  return (
    <div className=' flex flex-col gap-16 justify-center items-center  h-[100vh] bg-[#FFB71B] '>
      <Header />
      <div className='flex items-center justify-between  '>
        <div className='text-black z-50'>
          {
            ['Shop', 'Click', 'Thrive:Your E-Commerce Destination'].map((items, key) => {
              return <h1 className={`text-6xl hero_title  ${key === 2 && 'text-white  text-4xl'}`}>{items}</h1>
            })
          }
        </div>
        <div className='-mr-16'>
          <img src={heroImg} alt='logo' className='w-[800px]' />
        </div>
      </div>
    </div>
  )
}

export default Herosection
