import React from 'react'
import { motion } from 'framer-motion'
import { HiMiniViewfinderCircle } from "react-icons/hi2";


const ProductCard = ({ name, price, discount, about, image }) => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 100 }} transition={{ duration: 1, ease: 'easeIn' }} className='w-52 flex flex-col'>
            <div className='relative group overflow-hidden'>
                <img src={image} alt='logo' className='w-52  cursor-pointer saturate-200 filter hover:brightness-50' />
                <h1 className='absolute bottom-2 left-3 bg-[#ffffffa2] text-xs font-black px-2 py-1'>4.3⭐ | 8K</h1>
                <button className='absolute group-hover:translate-y-0 transition-all duration-300 hover:z-[999] translate-y-96 top-24 left-16 text-white px-2 py-1 font-black rounded-full text-6xl'><HiMiniViewfinderCircle />
                </button>
            </div>
            <div className='pl-1'>
                <h1 className='text-[#282C3F] page_title font-semibold'>{name}</h1>
                <h1 className='text-sm font-thin text-slate-600 line-clamp-1'>{about}</h1>
                <h1 className='flex items-center gap-3 text-sm font-semibold text-[#282C3F]'>{price}
                    <span className='text-red-600 text-sm  '>{discount} OFF</span></h1>
            </div>
        </motion.div>
    )
}

export default ProductCard
