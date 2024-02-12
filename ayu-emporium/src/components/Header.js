import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
    return (
        <div className='absolute top-8 rounded-2xl left-1/2 -translate-x-1/2 flex items-center 
        justify-between py-5   px-5 bg-[#1C161A] w-[75%]  ' >
            <div >
                <ul className='flex gap-4  text-md  text-white tracking-wide cursor-pointer'> {
                    ['Home', 'Shop', 'Carrers', 'About'].map((list_items) => {
                        return <li className='flex -pb-5  h-14 items-center gap-1 hover:text-[#FFB71B] transition-all '>
                            {list_items}<IoIosArrowDown />
                        </li>
                    })
                }</ul>
            </div>
            <div><h1 className='page_title -ml-14 text-3xl text-[#FFB71B]'>AyuEmporium</h1></div>
            <div className='flex gap-4 items-center'>
                <button className='px-6 py-1 rounded-full bg-white text-sm   '>ORDER NOW</button>
                <FaUserCircle className='text-white text-2xl' />
                <ImCart className='text-white text-xl' />
            </div>
        </div>
    )
}

export default Header
