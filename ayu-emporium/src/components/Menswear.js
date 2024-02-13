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
        <div className='flex flex-col items-center justify-center'>
            <Header2 />
            <div className=' w-full flex justify-center '>
                <img src={BANNER_URL} alt='banner' className='w-full h-[90vh]' />
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
