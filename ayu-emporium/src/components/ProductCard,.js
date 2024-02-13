import React from 'react'

const ProductCard = ({ name, price, discount, about, image }) => {
    return (
        <div className='w-52 flex flex-col'>
            <div>
                <img src={image} alt='logo' className='w-52' />
            </div>
            <div className='pl-1'>
                <h1 className='text-[#282C3F] page_title font-semibold'>{name}</h1>
                <h1 className='text-sm font-thin text-slate-600 line-clamp-1'>{about}</h1>
                <h1 className='flex items-center gap-3 text-sm font-semibold text-[#282C3F]'>{price}
                    <span className='text-red-600 text-sm  '>{discount} OFF</span></h1>
            </div>
        </div>
    )
}

export default ProductCard
