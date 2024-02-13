import React, { useEffect } from 'react'
import Herosection from './Herosection'
import Header, { Header2 } from './Header'
import { menswear } from './utils/__mocks__'
import ProductCard from './ProductCard,'
import { BANNER_URL } from './utils/constants'
const Menswear = () => {
    useEffect(() => {
        document.title = 'Mens Wear - AyuEmporium'
    }, [])
    return (
        <div className='flex flex-col gap-10 items-center justify-center'>
            <Header2 />
            <div className='bg-[#6599FF] w-full flex justify-center'>
                <img src={BANNER_URL} alt='banner' className='900px' />
            </div>
            <div className='flex gap-5 flex-wrap justify-center '>
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
