import React from 'react'
import logo from '../assets/login pic.png'
const ProfilePage = () => {
  return (
    <div className='absolute flex justify-center bg-[#00000084] backdrop-blur-md text-white items-center z-[99999] w-screen h-[100vh]'>
      {/* modal box*/}
      <div className='flex justify-between gap-10 items-start'>
        {/* this is inner box containing login box and image */}
        <div>
          {/* left box in modal */}
          <h1 className='text-3xl font-bold'>Login</h1>
          <form className='flex flex-col  '>
            <label for='email' />Enter Email Address:<label/>
            <input type='mail' placeholder='Enter Email...' />
            <label for='email' />Enter Password:<label/>
            <input type='mail' placeholder='Enter Password...' />
            <button>Login</button>
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
