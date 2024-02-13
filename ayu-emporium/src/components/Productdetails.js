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
    return <div className='flex px-5 pt-10'>
        <div className='flex w-8/12 flex-wrap gap-3'>
            {/* all 4 images */}
            <div><img src={data?.display_images[0]} alt='logo' className='w-96' /> </div>
            <div><img src={data?.display_images[1]} alt='logo' className='w-96' /> </div>
            <div><img src={data?.display_images[2]} alt='logo' className='w-96' /> </div>
            <div><img src={data?.display_images[3]} alt='logo' className='w-96' /> </div>

        </div>
        <div>
            {/* product details */}
            details
        </div>
    </div>
}
export default Productdetails
