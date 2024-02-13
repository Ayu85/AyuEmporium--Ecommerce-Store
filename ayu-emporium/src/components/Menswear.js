import React, { useEffect } from 'react'
import Herosection from './Herosection'
import Header, { Header2 } from './Header'
import { menswear } from './utils/__mocks__'
import ProductCard from './ProductCard,'
const Menswear = () => {
    useEffect(() => {
        document.title = 'Mens Wear - AyuEmporium'
    }, [])
    return (
        <div className='flex flex-col items-center justify-center'>
            <Header2 />
            <div className='flex gap-3 flex-wrap'>
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
