import React from 'react'
import { motion } from 'framer-motion'
import { SiStyleshare } from "react-icons/si";

const Slidingtext = () => {
    return (
        <div className='bg-[#1C161A] w-max overflow-x-hidden h-56 text-white flex text-8xl font-bold items-center justify-center'>
            {
                ['SHIRTS', 'JEANS', 'PARTY WEAR', 'ETHINIC WEAR', 'WESTERN', 'SHIRTS', 'JEANS', 'PARTY WEAR', 'ETHINIC WEAR', 'WESTERN', 'SHIRTS', 'JEANS', 'PARTY WEAR', 'ETHINIC WEAR', 'WESTERN', 'SHIRTS', 'JEANS', 'PARTY WEAR', 'ETHINIC WEAR', 'WESTERN', 'SHIRTS', 'JEANS', 'PARTY WEAR', 'ETHINIC WEAR', 'WESTERN', 'SHIRTS', 'JEANS', 'PARTY WEAR', 'ETHINIC WEAR', 'WESTERN', 'SHIRTS', 'JEANS', 'PARTY WEAR', 'ETHINIC WEAR', 'WESTERN', 'SHIRTS', 'JEANS', 'PARTY WEAR', 'ETHINIC WEAR', 'WESTERN'].map((item) => {
                    return <h1 className='slider tracking-wide border-t border-b border-slate-200 py-7 flex items-center'> {item} <SiStyleshare className='text-[#FFB71B] text-5xl' />   </h1>
                })
            }
        </div>
    )
}

export default Slidingtext
