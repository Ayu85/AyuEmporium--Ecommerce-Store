import React, { useEffect, useState } from 'react'
import Herosection from './Herosection'
import Header, { Header2 } from './Header'
import { menswear } from './utils/__mocks__'
import ProductCard from './ProductCard,'
import { BANNER_URL } from './utils/constants'
const Menswear = () => {
    let [currentBanner, setBanner] = useState(0)
    useEffect(() => {
        document.title = 'Mens Wear - AyuEmporium'
        // setInterval(() => {
        //     changeBanner()
        // }, 3000)
    }, [])
    const changeBanner = () => {
        if (currentBanner === BANNER_URL.length - 1)
            setBanner(0)
        else
            setBanner(currentBanner++);
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <Header2 />
            <div className=' w-full flex justify-center transition-all duration-500'>
                <img src={BANNER_URL[currentBanner]} alt='banner' className='w-full h-[100vh]' />
            </div>
            <div className='flex gap-5 mt-24 flex-wrap justify-center '>
                {
                    menswear.map((product, keys) => {
                        return <ProductCard {...product} />
                    })
                }
            </div>
        </div>
    )
}

export default Menswear
