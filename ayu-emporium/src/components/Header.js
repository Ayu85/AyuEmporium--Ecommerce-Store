import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { toogleCategories } from './redux/slices/showCategories'
const Header = () => {
    const [isScrolled, setScrolled] = useState(false)
    const checkScroll = () => {
        window.scrollY > 100 ? setScrolled(true) : setScrolled(false)
    }
    window.addEventListener('scroll', (e) => {
        checkScroll()
    })
    const dispatch = useDispatch();
    const showCategories = useSelector(store => store.categoriesView.value)
    return (
        <div className={`lg:flex  hidden  rounded-2xl  items-center fixed top-8 z-[999999] 
        justify-between  px-5 bg-[#1C161A] w-[75%] ${isScrolled ? "bg-[#1c161ab4] backdrop-blur-md" : 'bg-[#1C161A]'}  `} >
            <div >
                <ul className='flex gap-4  text-md  text-white tracking-wide cursor-pointer'> {
                    ['Home', 'Shop', 'Carrers', 'About'].map((list_item, keys) => {
                        return <li onMouseEnter={() => {
                            keys === 1 && dispatch(toogleCategories())
                        }} onMouseLeave={() => {
                            keys === 1 && dispatch(toogleCategories())
                        }} className={`  flex group h-24 items-center hover:text-[#FFB71B] transition-all`} >
                            {list_item}<MdOutlineNavigateNext className='group-hover:rotate-90 transition-all text-2xl' />
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
            {showCategories && <div className={` absolute flex transition-all  justify-evenly pt-2 top-20 w-full left-0 bg-white h-56 px-5 rounded-b-2xl `}>
                <div>
                    <h1 className='text-xl font-bold text-[#F7221E]'>Men</h1>
                    <ul className='py-3 flex flex-col gap-1 text-sm font-semibold'>{
                        ['Tishirts', 'Shirts', 'Ethinic', 'Footwear', 'Wedding', 'Jackets', 'Blazers'].map((items, keys) => {
                            return <li className='text-slate-600 tracking-wide cursor-pointer'>{items}</li>
                        })
                    }
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-[#F7221E]'>Women</h1>
                    <ul className='py-3 flex flex-col gap-1 text-sm font-semibold'>{
                        ['Kurtis & Suit', 'Sarees', 'Ethinic Wear', 'Footwear', 'Western Wear', 'Professional'].map((items, keys) => {
                            return <li className='text-slate-600 tracking-wide cursor-pointer'>{items}</li>
                        })
                    }
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-[#F7221E]'>Kids</h1>
                    <ul className='py-3 flex flex-col gap-1 text-sm font-semibold'>{
                        ['Tishirt', 'Shirt', 'Jeans and Trouser', 'Track Pant', 'Party Wear'].map((items, keys) => {
                            return <li className='text-slate-600 tracking-wide cursor-pointer'>{items}</li>
                        })
                    }
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-[#F7221E]'>Beauty</h1>
                    <ul className='py-3 flex flex-col gap-1 text-sm font-semibold'>{
                        ['Lipsticks', 'Maskara', 'Eyeliner', 'Eye Shadow', 'Face Creams'].map((items, keys) => {
                            return <li className='text-slate-600 tracking-wide cursor-pointer'>{items}</li>
                        })
                    }
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-[#F7221E]'>Home Decor</h1>
                    <ul className='py-3 flex flex-col gap-1 text-sm font-semibold'>{
                        [' Plants & Planters', 'Clocks', 'Mirrors', 'Sofa Set', 'Chairs', 'Wall Hangings', 'Paintings'].map((items, keys) => {
                            return <li className='text-slate-600 tracking-wide cursor-pointer'>{items}</li>
                        })
                    }
                    </ul>
                </div>
            </div>}
        </div>
    )
}
export const Header2 = () => {
    return <div className='w-full bg-[#1C161A] py-4 px-10'>
        <div><h1 className='page_title text-3xl text-[#FFB71B]'>AyuEmporium</h1></div>
    </div>
}

export default Header
