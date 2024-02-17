import React from 'react'
import logo from '../assets/login pic.png'
import { FcGoogle } from "react-icons/fc";

const ProfilePage = () => {
  return (
    <div className='absolute flex justify-center bg-[#00000084] backdrop-blur-md text-white items-center z-[99999] w-screen h-[100vh]'>
      {/* modal box*/}
      <div className='flex justify-between gap-10 items-start'>
        {/* this is inner box containing login box and image */}
        <div>
          {/* left box in modal */}
          <h1 className='text-3xl font-bold'>Login</h1>
          <form className='flex flex-col  ' onClick={(e) => {
            e.preventDefault()
          }}>
            <label for='email' className='text-2xl  py-2 ' />Enter Email Address:<label />
            <input type='mail' placeholder='Enter Email...' className='w-96 mt-1 mb-1 py-3 rounded-full pl-2 text-black outline-none focus:border-yellow-500 border-2' />
            <label for='email' />Enter Password:<label />
            <input type='mail' placeholder='Enter Password...' className='w-96  mt-1 py-3 rounded-full pl-2 text-black outline-none focus:border-yellow-500 border-2' />
            <button className='w-96 flex items-center gap-6 justify-center hover:bg-[#FFB71B] hover:text-black font-semibold transition-all duration-200 py-3 text-lg rounded-full mt-5 pl-2 bg-white text-black'><FcGoogle className='text-3xl' />Continue with Google
            </button>
            <button className='w-96 hover:bg-[#FFB71B] hover:text-black font-semibold transition-all duration-200 py-3 text-lg rounded-full mt-5 pl-2 bg-black text-white'>Login</button>
          </form>

        </div>
        <div>
          {/* right box in modal */}
          < img src={logo} alt='logo' />
        </div></div>
    </div>
  )
}

export default ProfilePage
