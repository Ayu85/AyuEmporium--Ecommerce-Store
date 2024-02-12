import React from 'react'
import Header from './Header'
const Herosection = () => {
  return (
    <div className=' flex items-center justify-center h-[100vh] bg-[#FFB71B] relative'>
      <Header />
      <div className='text-black z-50'>
        {
          ['Shop', 'Click', 'Thrive:Your E-Commerce Destination'].map((items, key) => {
            return <h1>{items}</h1>
          })
        }
      </div>
    </div>
  )
}

export default Herosection
