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
        <div className='flex items-center justify-center'>
            <Header2 />
            <div>
                {
                    menswear.map((product) => {
                        return <ProductCard {...product} />
                    })
                }
            </div>
        </div>
    )
}

export default Menswear
