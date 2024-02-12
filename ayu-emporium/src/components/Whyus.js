import React from 'react'
import { BsTextareaResize } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Whyus = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-3'>
                <BsTextareaResize />
                <h1>Fit or Free</h1>
                <h1>Our Products Always Fits You In Every Shape</h1>
            </div>

            <div>
                <RiSecurePaymentLine />
                <h1>Secure Payments</h1>
                <h1>Experience Hassle Free Payments Throughout Checkout Process</h1>

            </div>

            <div>
                <CiDeliveryTruck />
                <h1>Fastest Delivery</h1>
                <h1>7 Days Delivery In Almost All Cities Across India</h1>

            </div>

            <div>
                <GiReturnArrow />
                <h1>Easy Returns</h1>
            </div>

        </div>
    )
}

export default Whyus
