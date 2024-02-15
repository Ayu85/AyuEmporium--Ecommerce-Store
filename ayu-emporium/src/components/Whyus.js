import React from 'react'
import { BsTextareaResize } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Whyus = () => {
    return (
        <div className='flex flex-col gap-10  flex-wrap items-center justify-center bg-[#FFF8F4] pt-20 py-4 '>
            <h1 className='text-4xl text-slate-900 font-bold'>Why Choose Us?</h1>
            <div className='flex flex-wrap gap-5 items-center justify-center'>
                <div className='flex group hover:bg-[#1C161A] hover:scale-105 transition-all hover:text-slate-200 cursor-pointer flex-col gap-2 items-center rounded-xl justify-center border-slate-600 border px-3 py-4 w-80 text-center '>
                    <BsTextareaResize className='text-4xl' />
                    <h1 className='text-xl font-semibold text-slate-600 group-hover:text-slate-300'>Fit or Free</h1>
                    <h1 className='text-slate-600 group-hover:text-slate-300 '>Our Products Always Fits You In Every Shape</h1>
                </div>

                <div className='flex group hover:bg-[#1C161A] hover:scale-105 transition-all hover:text-slate-200 cursor-pointer flex-col gap-2 items-center rounded-xl justify-center border-slate-600 border px-3 py-4 w-80 text-center '>
                    <RiSecurePaymentLine className='text-4xl' />
                    <h1 className='text-xl font-semibold text-slate-600 group-hover:text-slate-300'>Secure Payments</h1>
                    <h1 className='text-slate-600 group-hover:text-slate-300'>Experience Hassle Free Payments Throughout Checkout Process</h1>

                </div>

                <div className='flex group hover:bg-[#1C161A] hover:scale-105 transition-all hover:text-slate-200 cursor-pointer flex-col gap-2 items-center rounded-xl justify-center border-slate-600 border px-3 py-4 w-80 text-center '>
                    <CiDeliveryTruck className='text-4xl' />
                    <h1 className='text-xl font-semibold text-slate-600 group-hover:text-slate-300'>Fastest Delivery</h1>
                    <h1 className='text-slate-600 group-hover:text-slate-300 '>7 Days Delivery In Almost All Cities Across India</h1>

                </div>

                <div className='flex group hover:bg-[#1C161A] hover:scale-105 transition-all hover:text-slate-200 cursor-pointer flex-col gap-2 items-center rounded-xl justify-center border-slate-600 border px-3 py-4 w-80 text-center '>
                    <GiReturnArrow className='text-4xl' />
                    <h1 className='text-xl font-semibold text-slate-600 group-hover:text-slate-300'>Easy Returns</h1>
                    <h1 className='text-slate-600 group-hover:text-slate-300'>Hassle Free Returns and Replacement Within 10 Days </h1>
                </div></div>

        </div>
    )
}

export default Whyus
