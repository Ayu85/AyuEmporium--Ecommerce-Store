import React from 'react'
import heroImg from '../assets/heroImg.png'
import Header from './Header'
const Herosection = () => {
  return (
    <div className=' flex items-center justify-center h-[100vh] bg-[#FFB71B] relative'>
      <Header />
      <div className='text-black z-50'>
        {
          ['Shop', 'Click', 'Thrive:Your E-Commerce Destination'].map((items, key) => {
            return <h1 className={`text-7xl hero_title  ${key===2&&'text-white w-[700px] text-5xl'}`}>{items}</h1>
          })
        }
      </div>
      <div>
        <img src={heroImg} alt='logo'/>
      </div>
    </div>
  )
}

export default Herosection
