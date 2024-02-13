import React, { useEffect, useState } from 'react'
import { Header2 } from './Header'
import { useParams } from 'react-router-dom'
import { menswear } from './utils/__mocks__'
const Productdetails = () => {


    return (
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
        <div className='flex w-[55%] flex-wrap gap-3'>
            {/* all 4 images */}
            <div><img src={data?.display_images[0]} alt='logo' className='w-96' /> </div>
            <div><img src={data?.display_images[1]} alt='logo' className='w-96' /> </div>
            <div><img src={data?.display_images[2]} alt='logo' className='w-96' /> </div>
            <div><img src={data?.display_images[3]} alt='logo' className='w-96' /> </div>
        </div>
        <div className='w-[45%]'>
            {/* product details */}
            <div className=' flex flex-col gap-1 border-b border-slate-300 pb-3'>
                <h1 className='text-2xl font-bold text-[#282C3F] uppercase'>{data?.name}</h1>
                <h1 className='text-[#757884] w-80 text-md font-sans line-clamp-2 '>{data?.about}</h1>
                <h1 className=' from-black text-md  px-2 py-1 border mt-3 border-slate-300 w-44 text-center'>4.3⭐ | <span className='text-[#757884]'>8K+ Ratings</span></h1>

            </div>

        </div>
    </div>
}
export default Productdetails
