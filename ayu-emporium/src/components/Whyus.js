import React from 'react'
import { BsTextareaResize } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Whyus = () => {
    return (
        <div className='flex items-center justify-between bg-[#faf2e5] py-4 px-10'>
            <div className='flex flex-col gap-2 items-center rounded-xl justify-center border-slate-600 border px-3 py-4 w-80 text-center '>
                <BsTextareaResize className='text-4xl' />
                <h1 className='text-xl font-semibold text-slate-600'>Fit or Free</h1>
                <h1 className='text-slate-600 '>Our Products Always Fits You In Every Shape</h1>
            </div>

            <div className='flex flex-col gap-2 items-center rounded-xl justify-center border-slate-600 border px-3 py-4 w-80 text-center '>
                <RiSecurePaymentLine className='text-4xl' />
                <h1 className='text-xl font-semibold text-slate-600'>Secure Payments</h1>
                <h1 className='text-slate-600 '>Experience Hassle Free Payments Throughout Checkout Process</h1>

            </div>

            <div className='flex flex-col gap-2 items-center rounded-xl justify-center border-slate-600 border px-3 py-4 w-80 text-center '>
                <CiDeliveryTruck className='text-4xl' />
                <h1 className='text-xl font-semibold text-slate-600'>Fastest Delivery</h1>
                <h1 className='text-slate-600 '>7 Days Delivery In Almost All Cities Across India</h1>

            </div>

            <div className='flex flex-col gap-2 items-center rounded-xl justify-center border-slate-600 border px-3 py-4 w-80 text-center '>
                <GiReturnArrow className='text-4xl' />
                <h1 className='text-xl font-semibold text-slate-600'>Easy Returns</h1>
                <h1 className='text-slate-600 '>Hassle Free Returns and Replacement Within 10 Days </h1>
            </div>

        </div>
    )
}

export default Whyus
