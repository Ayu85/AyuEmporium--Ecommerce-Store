import React, { useEffect, useState } from 'react'
import Herosection from './Herosection'
import Header, { Header2 } from './Header'
import { menswear } from './utils/__mocks__'
import ProductCard from './ProductCard,'
import { BANNER_URL } from './utils/constants'
import { Link, useLocation } from 'react-router-dom'
import Breadcrums from './Breadcrums'
const Menswear = () => {
    const location = useLocation()
    console.log(location);
    let [currentBanner, setBanner] = useState(0)
    useEffect(() => {
        document.title = 'Mens Wear - AyuEmporium'
        setInterval(() => {
            changeBanner()
        }, 3000)
    }, [])
    const changeBanner = () => {
        if (currentBanner === BANNER_URL.length - 1)
            setBanner(0)
        else
            setBanner(currentBanner++);
    }

    return (
        <div className='flex flex-col items-start justify-center overflow-hidden'>
            <Header2 />
            <div className=' flex transition-all duration-500 '>
                <img src={BANNER_URL[currentBanner]} alt='banner' className='w-screen h-[100vh]' />
            </div>
            {/* <Breadcrums path={location.pathname} /> */}
            <div className='flex gap-5 mt-10 flex-wrap justify-center '>
                {
                    menswear.map((product, keys) => {
                        return <Link to={`/details/${product.id}`}><ProductCard {...product} /></Link>
                    })
                }
            </div>
        </div>
    )
}

export default Menswear
