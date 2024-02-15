import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { FiUser } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

import { toogleCategories } from './redux/slices/showCategories'
import { useNavigate } from 'react-router-dom';
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
    const [showProfile, setShowProfile] = useState(false)
    const [showDropdown, setDropdown] = useState(false)
    const cartItems = useSelector(store => store.cart.items)
    const navigate = useNavigate()

    return <div className='w-full cursor-pointer bg-[#1C161A] py-4 px-10 flex justify-between items-center'>
        <div onClick={() => {
            navigate('/')
        }}><h1 className='page_title text-3xl text-[#FFB71B]'>AyuEmporium</h1></div>
        <div className='text-white hidden lg:flex text-xl  gap-6 items-center '>
            <div className='relative'>
                <input type='text' className='w-[500px] py-2
                  outline-[#FFB71B] text-sm capitalize pl-9 text-slate-500'
                    placeholder='search for  products brand and more' />
                <CiSearch className='absolute left-2 top-2 text-slate-700 font-black' />
            </div>
            <div onMouseEnter={() => {
                setShowProfile(true)
                setDropdown(true)
            }} onMouseLeave={() => {
                setShowProfile(false)
                setDropdown(false)

            }} className='flex page_title flex-col items-center relative cursor-pointer hover:text-[#ffb71b]'>
                <FiUser /><span className='text-sm'>Profile</span>
            </div>
            <div onMouseEnter={() => {
                setDropdown(true)
            }} onMouseLeave={() => {
                setDropdown(false)
            }} className={`w-80 bg-white h-[250px] px-5 py-2 absolute transition-all duration-1000 top-14 right-11 z-[99999] ${showProfile || showDropdown ? "visible " : "hidden"}`}>
                <div className='flex flex-col border-b border-slate-300 pb-4'>
                    <h1 className='text-[#282C3F] font-bold text-md '>Welcome</h1>
                    <h1 className='text-slate-600 font-light text-sm  '>To Access Account and Manage Orders</h1>
                    <button className='px-2 py-1 text-[#ffb71b] text-sm border w-28 mt-1 bg-black border-slate-500'> Login/Signup</button>
                </div>
                <ul className='flex flex-col border-b border-slate-300 pb-4 pt-3 gap-1 text-slate-600 text-sm'>
                    {
                        ['Orders', 'Wishlist', 'Contact Us', 'Gift Cards'].map((list) => {
                            return <li>{list}</li>
                        })
                    }
                </ul>
            </div>

            <div className='flex page_title flex-col items-center'><IoMdHeartEmpty /><span className='text-sm'>Wishlist</span>
            </div>
            <div onClick={() => {
                navigate('/cart')
            }}
                className={`flex bag page_title flex-col items-center relative cursor-pointer hover:scale-110 transition-all`}>
                <IoBagHandleOutline /><span className='text-sm'>Bag</span>
                <span className='absolute -right-4 -top-2 text-sm bg-[#ffb71b] rounded-full font-semibold text-black px-2 py-1'>{cartItems.length}</span>
            </div>

        </div>
        <div className='text-white text-3xl lg:hidden'><RxHamburgerMenu /></div>
        <div className={`fixed lg:hidden flex flex-col top-0 text-white  h-[100vh] px-10 bg-[#1c161ac8] backdrop-blur-md z-[999999] backdrop-blur-md w-screen `}>
            <div className='flex justify-between text-4xl py-3'><h1 className='page_title text-[#FFB71B]  text-4xl '>AyuEmporium</h1>
            </div>
            <ul className='text-xl py-3 flex flex-col gap-3 mt-10 '>
                {['Home', 'About', 'Shop', 'My Account', `Cart`, 'Become a Seller'].map((list) => {
                    return <li className='cursor-pointer hover:text-[#FFB71B]'>{list}</li>
                })}
            </ul>
        </div>
    </div>
}

export default Header
