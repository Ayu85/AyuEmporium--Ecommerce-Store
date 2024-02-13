import React, { useEffect } from 'react'
import Herosection from './Herosection'
import Header, { Header2 } from './Header'

const Menswear = () => {
    useEffect(() => {
        document.title = 'Mens Wear - AyuEmporium'
    }, [])
    return (
        <div className='flex items-center justify-center'>
            <Header2 />
        </div>
    )
}

export default Menswear
