import React, { useEffect } from 'react'
import Herosection from './Herosection'
import Header from './Header'

const Menswear = () => {
    useEffect(() => {
        document.title = 'Mens Wear - AyuEmporium'
    }, [])
    return (
        <div className='flex items-center justify-center'>
            <Header />
        </div>
    )
}

export default Menswear
