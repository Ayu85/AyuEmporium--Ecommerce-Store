import React, { useEffect, useState } from 'react'
import { Header2 } from './Header'
import { useLocation, useParams } from 'react-router-dom'
import { menswear } from './utils/__mocks__'
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import Shimmer from './Shimmer';
import { MdLocalOffer } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setPrice } from './redux/slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrums from './Breadcrums';
import ProfilePage from './ProfilePage';
const Productdetails = () => {
    const [data, setData] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setData(true)
        }, 3000)
    }, [])
    return data === false ? < Shimmer /> : (
        <div>
            <Header2 />
            <Details />
        </div>
    )
}
const Details = () => {
    const prodId = useParams()
    const [id] = useState(prodId.id)
    const [data, setData] = useState(null)
    const [size, setSize] = useState(null)
    const [cartFull, setCartFull] = useState(false)
    const [sizeError, setSizeerror] = useState(false)
    const cartItems = useSelector(store => store.cart.items)
    useEffect(() => {
        const d = filterData()
        setData(d[0])
    }, [])
    const filterData = () => {
        return menswear.filter((items) => {
            return items.id == id
        })
    }
    const dispatch = useDispatch();
    const location = useLocation();
    return <>
        {/* <Breadcrums path={location.pathname} prod={data?.name} /> */}
        <ProfilePage />
        <div className='flex flex-wrap lg:flex-nowrap md:flex-nowrap px-5 pt-10 h-max lg:pr-44 md:pr-24 justify-center gap-10'>
            <div className='flex flex-wrap gap-3'>
                {/* all 4 images */}
                <div className='w-[420px] overflow-hidden cursor-pointer'><img src={data?.display_images[0]} alt='logo' className='w-[420px] hover:scale-110 transition-all duration-200 hover:saturate-200' /> </div>
                <div className='w-[420px] overflow-hidden cursor-pointer hidden md:block lg:block'><img src={data?.display_images[1]} alt='logo' className='w-[420px]  hover:scale-110 transition-all duration-200 hover:saturate-200' /> </div>
                <div className='w-[420px] overflow-hidden cursor-pointer hidden md:visibible lg:block'><img src={data?.display_images[2]} alt='logo' className='w-[420px]  hover:scale-110 transition-all duration-200 hover:saturate-200' /> </div>
                <div className='w-[420px] overflow-hidden cursor-pointer hidden md:visibible lg:block'><img src={data?.display_images[3]} alt='logo' className='w-[420px]  hover:scale-110 transition-all duration-200 hover:saturate-200' /> </div>
            </div>
            <div className='w-[800px]'>
                {/* product details */}
                <div className=' flex flex-col gap-1 border-b border-slate-300 pb-5'>
                    <h1 className='text-2xl font-bold text-[#282C3F] uppercase'>{data?.name}</h1>
                    <h1 className='text-[#757884] w-80 text-md font-sans line-clamp-2 '>{data?.about}</h1>
                    <h1 className=' from-black text-md  px-2 py-1 border mt-3 border-slate-300 w-44 text-center'>4.3⭐ | <span className='text-[#757884]'>8K+ Ratings</span></h1>
                </div>

                <div className='flex flex-col gap-2 border-b border-slate-300 pb-5'>
                    <div className=' flex items-center gap-4 mt-3'>
                        <h1 className='text-2xl font-bold text-[#282C3F] uppercase'>Rs. {data?.details?.bestPrice?.price?.discounted}</h1>
                        <h1 className='text-[#757884] text-xl font-sans line-clamp-2 line-through'>MRP Rs.{data?.details?.bestPrice?.price?.mrp}</h1>
                        <h1 className=' text-xl text-[#FFB71B] font-semibold'>(Rs.{data?.details?.bestPrice?.price?.mrp - data?.details?.bestPrice?.price?.discounted} OFF)</h1>
                    </div>
                    <h1 className='text-[#03A685] font-semibold'>Incl. of all taxes</h1>
                    <h1 className='text-lg font-bold mt-3'>Select Size</h1>
                    <div className='flex items-center gap-4'>
                        {
                            [32, 36, 38, 40, 44, 46].map((sizes) => {
                                return <h1 onClick={() => {
                                    setSize(sizes)
                                    setSizeerror(false)
                                }} className={`${size === sizes && "bg-black text-white "} text-md cursor-pointer hover:text-white hover:bg-[#1C161A] hover:border-[#FFB71B] transition-all duration-200 font-bold rounded-full py-3 w-12 text-center border-slate-400 border`}>{sizes}</h1>
                            })
                        }
                    </div>
                    {/* ************************ */}
                    <h1 className={`${sizeError && "animate-[pulse_linear_0.5s_infinite] "} text-red-600 font-semibold`}>{sizeError && cartItems.length < 10 ? "Please Select Size..." : ""}</h1>
                    <h1 className={`${cartFull && "animate-[pulse_linear_0.5s_infinite] "} text-red-600 font-semibold`}>{cartFull ? "Cart Overloaded,Please delete items..." : ""}</h1>
                    <div className='flex gap-10 pt-5'>

                        <button disabled={cartFull && true} onClick={() => {
                            cartItems.length > 9 && setCartFull(true)
                            !cartFull && size ? dispatch(addItem({ name: data?.name, price: data?.details?.bestPrice?.price?.discounted, size: size, logo: data?.image })) : setSizeerror(true)
                            size && dispatch(setPrice(data?.details?.bestPrice?.price?.discounted))
                        }} className={`disabled:bg-red-600 disabled:cursor-not-allowed flex active:scale-125 active:bg-[#FFB71B] transition-all  items-center gap-4 text-md uppercase bg-[#1C161A] text-slate-50 px-9 py-3`}><IoBagHandleOutline className='text-2xl' />Add To Bag</button>
                        <button className='flex items-center gap-4 text-md uppercase border-slate-400 border  px-7 py-3'><IoMdHeartEmpty className='text-2xl text-red-600' />Wishlist</button>

                    </div>
                    {/* ************************ */}

                </div>
                <div className='flex flex-col gap-2 font-sans pt-4 border-b border-slate-300 pb-5'>
                    {
                        [' 100% Original Products',
                            'Pay on delivery might be available',
                            'Easy 14 days returns and exchanges',
                            ' Try & Buy might be available',].map((list) => {
                                return <h1>{list}</h1>
                            })
                    }
                </div>
                <div className='pt-3'>
                    <h1 className='flex items-center gap-2 font-semibold'>BEST OFFERS<MdLocalOffer />
                    </h1>
                    <h1 className='flex items-center gap-2 text-md from-black pt-4'>Best Price <span className=' text-[#FFB91B] font-semibold'>Rs. {data?.details?.bestPrice?.price?.discounted}</span>
                    </h1>
                    <ul className='list-disc pl-3 pt-3 font-sans'>
                        <li>{data?.details?.bestPrice?.display[0].label} <span className='font-semibold'>{data?.details?.bestPrice?.display[0].value}</span></li>
                        <li>{data?.details?.bestPrice?.display[1].label} {data?.details?.bestPrice?.display[1].value}</li>
                        <li>{data?.details?.bestPrice?.display[2].label} {data?.details?.bestPrice?.display[2].value}</li>
                    </ul>
                </div>


            </div>
        </div ></>
}
export default Productdetails
