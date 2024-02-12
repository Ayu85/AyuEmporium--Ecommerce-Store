import React from 'react'

const CategoryCard = () => {
    return (
        <div className='flex flex-col gap-1 w-72 bg-[#ffb71b79] items-center   py-3  cursor-pointer relative '>
            <img className='w-64 ' src='https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg' alt='Logo' />
            <div className='absolute bottom-0 bg-[#FFD98D] py-1 pb-2 backdrop-blur-md w-full text-center'> <h1 className='text-2xl font-bold text-slate-700'>Mens Wear</h1>
                <h1 className='text-lg font-semibold text-[#F7221E]'>50-80% OFF</h1>
                <button className='bg-black text-white px-4 py-1 rounded-full'>Shop Now</button></div>
        </div>
    )
}

export default CategoryCard
