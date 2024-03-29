import React, { useEffect, useState } from 'react'
import logo from '../assets/login pic.png'
import { FcGoogle } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { toogleModal } from './redux/slices/login_modal';

const ProfilePage = () => {
  const showLogin = useSelector(store => store.loginmodal.value)
  useEffect(() => {
    handleScroll()
  }, [showLogin])
  
  const handleScroll = () => {
    showLogin ? document.getElementsByTagName('body')[0].style.overflow = 'hidden' : document.getElementsByTagName('body')[0].style.overflow = 'visible'
  }
  const dispatch = useDispatch()
  return <div className={` ${showLogin && `translate-y-[0px] transition-all duration-200 `}  ${!showLogin && "-translate-y-[2000px] transition-all duration-200"} ${!showLogin && "-translate-y-[2000px] transition-all duration-700"} absolute flex   flex-col justify-start bg-[#00000084] backdrop-blur-xl text-white items-center z-[99999] w-screen h-[100vh]`}>
    {/* modal box*/}
    <div className='flex justify-between text-4xl items-center w-full px-20 page_title py-4 bg-white text-black'><h1>Login/Sign up</h1><span><RxCross1 className='cursor-pointer' onClick={() => {
      dispatch(toogleModal())
    }} /></span></div>
    <div className='flex justify-between lg:gap-44 md:gap-44 gap-0 items-center   px-10 mt-20'>
      {/* this is inner box containing login box and image */}
      <div>
        {/* left box in modal */}
        <h1 className='text-3xl page_title font-bold'>Login</h1>
        <form className='flex flex-col  ' onClick={(e) => {
          e.preventDefault()
        }}>
          <label for='email' className='text-2xl  py-2 ml-3 ' />Enter Email Address*<label />
          <input type='mail' placeholder='Enter Email...' className='w-96 mt-1 mb-1 py-3 rounded-full pl-2 text-black outline-none focus:border-yellow-500 border-2' />
          <label for='email' className='py-1' />Enter Password*<label />
          <input type='mail' placeholder='Enter Password...' className='w-96  mt-1 py-3 rounded-full pl-2 text-black outline-none focus:border-yellow-500 border-2' />
          <button className='w-96 py-1 flex items-center gap-6 justify-center hover:bg-[#FFB71B] hover:text-black font-semibold transition-all duration-200 py-3 text-lg rounded-full mt-5 pl-2 bg-white text-black'><FcGoogle className='text-3xl' />Continue with Google
          </button>
          <button className='w-96 hover:bg-[#FFB71B] hover:text-black font-semibold transition-all duration-200 py-3 text-lg rounded-full mt-5 pl-2 bg-black text-white'>Login</button>
        </form>

      </div>
      <div>
        {/* right box in modal */}
        < img src={logo} alt='logo' className='w-[300px] lg:block md:block hidden' />
      </div></div>
  </div>

}

export default ProfilePage
