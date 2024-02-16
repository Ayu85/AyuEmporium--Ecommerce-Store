import React from 'react'
import { Header2 } from './Header'
import { BiSolidOffer } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";
import sadlogo from '../assets/sad.png'
import emptycart2 from '../assets/emptycart2.png'
import { deleteItem } from './redux/slices/cartSlice';
const Cart = () => {
    const items = useSelector(store => store.cart.items)

    return items.length === 0 ? <EmptyCart /> : (
        <div>
            <Header2 />
            <CartDetails />
        </div>
    )
}
const CartDetails = () => {
    const items = useSelector(store => store.cart.items)
    const totalPrice = useSelector(store => store.cart.totalPrice)
    const dispatch = useDispatch()
    return <div className='flex justify-center items-center mt-10   '>
        <div className='w-[60%] bg-slate-200 flex  justify-center h-max py-10 px-5'>
            <div className='flex gap-10 flex-wrap justify-center'>
                <div className=' px-4'>
                    {/* left box with items */}
                    <div className='flex flex-col gap-2 px-3'>
                        <h1 className='flex items-center text-lg'><BiSolidOffer className='text-xl' />
                            Available Offers</h1>
                        <h2 className='font-sans'>10% instant discount on HDFC bank credit and debit cards</h2>
                        <h2 className='font-sans'>15% instant discount on SBI Rupay card</h2>
                    </div>
                    <div className='flex flex-col mt-5 gap-6'>
                        <h1 className='text-xl fw-semibold'>Items In Bag</h1>
                        {items.map((prod, key) => {
                            return <div className='flex gap-4'>
                                <div>
                                    <img src={prod?.logo} alt='logo' className='w-20' />
                                </div>
                                <div>
                                    <h1 className='page_title'>{prod?.name}</h1>
                                    <h1><span className='page_title'>Size: </span>{prod?.size}</h1>
                                    <h1 className='flex items-center'><span className='page_title'>Price:  </span> <MdCurrencyRupee className='pl-1 text-lg' />
                                        {prod?.price}</h1>
                                    <button onClick={() => {
                                        dispatch(deleteItem(key))
                                    }} className='text-red-600  text-3xl hover:scale-110 transition-all mt-1 cursor-pointer'><MdDeleteForever />
                                    </button>
                                </div>

                            </div>
                        })}
                    </div>
                </div>
                <div className='px-5'>
                    {/* right box with summary */}
                    <h1 className='text-lg flex items-center gap-1'>Order Summary<SiMoneygram />
                    </h1>
                    <h2 className='pt-2'><span className='font-black cursor-pointer'> Login</span> to get flat 40% off on first order</h2>
                    <div className='pt-3'>
                        <h1 className='font-black '>Price Details :<span className='font-light'> ({items.length} items)</span></h1>
                        <h1 className='flex justify-between mt-2 w-52 text-slate-700'>Total MRP <span>{totalPrice * 2}</span></h1>
                        <h1 className='flex justify-between mt-2 w-52 text-slate-700'>Discount on MRP <span>{totalPrice / 2}</span></h1>
                        <h1 className='flex justify-between mt-2 w-52 text-slate-700 border-b border-slate-800 pb-2'>Total MRP <span>{totalPrice}</span></h1>
                        <h1 className='flex justify-between mt-2 w-52 text-black font-semibold border-b border-slate-800 pb-2'>Total Amount <span>{totalPrice}</span></h1>
                    </div>
                    <button className='bg-black text-white px-4 py-2 mt-7 hover:scale-105 transition-all'>Proceed To Checkout</button>
                </div>
            </div>
            <div></div>

        </div>
    </div>
}
const EmptyCart = () => {
    return <div className='flex flex-col items-center justify-center'>
        <Header2 />
        <div className='flex flex-col justify-center items-center'>
            <img src={sadlogo} alt='logo' className='w-64 emptycart' />
            <h1 className='page_title text-2xl'>Please Add Items</h1>
            <img src={emptycart2} alt='logo' className='w-72 cartslider' />
        </div>
    </div>
}
export default Cart
