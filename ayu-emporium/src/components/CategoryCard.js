import React from 'react'

const CategoryCard = () => {
    return (
        <div className='flex flex-col gap-1 w-72 items-center  bg-[#1C161A] py-3  cursor-pointer '>
            <img className='w-64 ' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg' alt='Logo' />
            <h1 className='text-2xl font-bold text-slate-100'>Mens Wear</h1>
            <h1 className='text-xl font-semibold text-[#F7221E]'>50-80% OFF</h1>
            <button className='bg-[#FFB71B] px-4 py-1 rounded-full'>Shop Now</button>
        </div>
    )
}

export default CategoryCard
