import React from 'react'
import { motion } from 'framer-motion'
const CategoryCard = ({ logo, name, discount }) => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 100 }} transition={{ duration: 1.5}} className='flex group overflow-hidden flex-col gap-1 w-64 bg-[#ffb71b79] items-center   py-2  cursor-pointer relative '>
            <img className='w-60 group-hover:scale-110 transition-all' src={logo} alt='Logo' />
            <div className='absolute bottom-0 bg-[#FFD98D] py-1 pb-2 backdrop-blur-md w-full text-center'> <h1 className='text-xl font-bold text-slate-700'> {name}</h1>
                <h1 className='text-base font-semibold text-[#F7221E]'>{discount}</h1>
                <button className='font-black'>Shop Now</button></div>
        </motion.div>
    )
}

export default CategoryCard
