import React from 'react'
import { Header2 } from './Header'
import { BiSolidOffer } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { MdDeleteForever } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";

const Cart = () => {
    return (
        <div>
            <Header2 />
            <CartDetails />
        </div>
    )
}
const CartDetails = () => {
    const items = useSelector(store => store.cart.items)
    return <div className='flex justify-center items-center mt-10   '>
        <div className='w-[60%] bg-slate-200 flex  justify-center h-max py-10'>
            <div className='flex gap-10'>
                <div className='border-r border-black px-4'>
                    {/* left box with items */}
                    <div className='flex flex-col gap-2'>
                        <h1 className='flex items-center text-lg'><BiSolidOffer className='text-xl' />
                            Available Offers</h1>
                        <h2 className='font-sans'>10% instant discount on HDFC bank credit and debit cards</h2>
                        <h2 className='font-sans'>15% instant discount on SBI Rupay card</h2>
                    </div>
                    <div className='flex flex-col mt-5 gap-6'>
                        <h1 className='text-xl fw-semibold'>Items In Bag</h1>
                        {items.map((prod) => {
                            return <div className='flex gap-4'>
                                <div>
                                    <img src={prod?.logo} alt='logo' className='w-20' />
                                </div>
                                <div>
                                    <h1 className='page_title'>{prod?.name}</h1>
                                    <h1><span className='page_title'>Size: </span>{prod?.size}</h1>
                                    <h1 className='flex items-center'><span className='page_title'>Price:  </span> <MdCurrencyRupee className='pl-1 text-lg'/>
                                        {prod?.price}</h1>
                                    <button className='text-red-600  text-3xl hover:scale-110 transition-all mt-1 cursor-pointer'><MdDeleteForever />
                                    </button>
                                </div>

                            </div>
                        })}
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
