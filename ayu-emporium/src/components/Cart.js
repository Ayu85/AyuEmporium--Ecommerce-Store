import React from 'react'
import { Header2 } from './Header'
import { BiSolidOffer } from "react-icons/bi";

const Cart = () => {
    return (
        <div>
            <Header2 />
            <CartDetails />
        </div>
    )
}
const CartDetails = () => {
    return <div className='flex justify-center items-center mt-10 '>
        <div className='w-[60%] bg-slate-200 flex items-center justify-center py-4 h-[80vh] '>
            <div className='flex gap-10'>
                <div className='border-r border-black px-4'>
                    {/* left box with items */}
                    <div className='flex flex-col gap-2'>
                        <h1 className='flex items-center text-lg'><BiSolidOffer className='text-xl' />
                            Available Offers</h1>
                        <h2 className='font-sans'>10% instant discount on HDFC bank credit and debit cards</h2>
                        <h2 className='font-sans'>15% instant discount on SBI Rupay card</h2>
                    </div>
                    <div className='flex flex-col mt-5 '>
                        <h1 className='text-xl fw-semibold'>Items In Bag</h1>

                    </div>
                </div>
                <div>
                    {/* right box with summary */}
                    <h1>Order Summary</h1>
                    <h2>Login to get flat 40% off on first order</h2>
                </div>
            </div>
            <div></div>

        </div>
    </div>
}

export default Cart
