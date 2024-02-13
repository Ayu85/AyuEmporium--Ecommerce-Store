import React, { useEffect, useState } from 'react'
import { Header2 } from './Header'
import { useParams } from 'react-router-dom'
import { menswear } from './utils/__mocks__'
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import Shimmer from './Shimmer';

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
    useEffect(() => {
        const d = filterData()
        setData(d[0])
    }, [])
    const filterData = () => {
        return menswear.filter((items) => {
            return items.id == id
        })
    }
    return <div className='flex flex-wrap px-5 pt-10'>
        <div className='flex w-[60%] flex-wrap gap-3'>
            {/* all 4 images */}
            <div className='w-[420px] overflow-hidden cursor-pointer'><img src={data?.display_images[0]} alt='logo' className='w-[420px] hover:scale-110 transition-all duration-200 hover:saturate-200' /> </div>
            <div className='w-[420px] overflow-hidden cursor-pointer'><img src={data?.display_images[1]} alt='logo' className='w-[420px]  hover:scale-110 transition-all duration-200 hover:saturate-200' /> </div>
            <div className='w-[420px] overflow-hidden cursor-pointer'><img src={data?.display_images[2]} alt='logo' className='w-[420px]  hover:scale-110 transition-all duration-200 hover:saturate-200' /> </div>
            <div className='w-[420px] overflow-hidden cursor-pointer'><img src={data?.display_images[3]} alt='logo' className='w-[420px]  hover:scale-110 transition-all duration-200 hover:saturate-200' /> </div>
        </div>
        <div className='w-[40%]'>
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
                    <h1 className='text-md cursor-pointer hover:text-white hover:bg-[#1C161A] hover:border-[#FFB71B] transition-all duration-200 font-bold rounded-full py-3 w-12 text-center border-slate-400 border'>32</h1>
                    <h1 className='text-md cursor-pointer hover:text-white hover:bg-[#1C161A] hover:border-[#FFB71B] transition-all duration-200 font-bold rounded-full py-3 w-12 text-center border-slate-400 border'>36</h1>
                    <h1 className='text-md cursor-pointer hover:text-white hover:bg-[#1C161A] hover:border-[#FFB71B] transition-all duration-200 font-bold rounded-full py-3 w-12 text-center border-slate-400 border'>38</h1>
                    <h1 className='text-md cursor-pointer hover:text-white hover:bg-[#1C161A] hover:border-[#FFB71B] transition-all duration-200 font-bold rounded-full py-3 w-12 text-center border-slate-400 border'>40</h1>
                    <h1 className='text-md cursor-pointer hover:text-white hover:bg-[#1C161A] hover:border-[#FFB71B] transition-all duration-200 font-bold rounded-full py-3 w-12 text-center border-slate-400 border'>44</h1>
                    <h1 className='text-md cursor-pointer hover:text-white hover:bg-[#1C161A] hover:border-[#FFB71B] transition-all duration-200 font-bold rounded-full py-3 w-12 text-center border-slate-400 border'>46</h1>
                </div>
                <div className='flex gap-10 pt-5'>
                    <button className='flex items-center gap-4 text-md uppercase bg-[#1C161A] text-slate-50 px-9 py-3'><IoBagHandleOutline className='text-2xl' />Add To Bag</button>
                    <button className='flex items-center gap-4 text-md uppercase border-slate-400 border  px-7 py-3'><IoMdHeartEmpty className='text-2xl text-red-600' />Wishlist</button>
                </div>

            </div>
            <div className='flex flex-col gap-2 font-sans pt-4'>
                {
                    [' 100% Original Products',
                        'Pay on delivery might be available',
                        'Easy 14 days returns and exchanges',
                        ' Try & Buy might be available',].map((list) => {
                            return <h1>{list}</h1>
                        })
                }
            </div>


        </div>
    </div>
}
export default Productdetails
