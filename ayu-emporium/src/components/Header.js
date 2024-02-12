import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { MdOutlineNavigateNext } from "react-icons/md";

const Header = () => {
    return (
        <div className='  rounded-t-2xl flex items-center fixed top-8 z-[999999] 
        justify-between py-5   px-5 bg-[#1C161A] w-[75%]  ' >
            <div >
                <ul className='flex gap-4  text-md  text-white tracking-wide cursor-pointer'> {
                    ['Home', 'Shop', 'Carrers', 'About'].map((list_items) => {
                        return <li className='flex group -pb-5  h-14 items-center hover:text-[#FFB71B] transition-all '>
                            {list_items}<MdOutlineNavigateNext className='group-hover:rotate-90 transition-all text-2xl' />
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
            <div className='absolute top-24 w-full left-0 bg-white h-56 px-5 rounded-b-2xl '>asdad</div>
        </div>
    )
}

export default Header
