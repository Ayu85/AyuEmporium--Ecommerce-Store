import React from 'react'
import Header from './Header'
import Herosection from './Herosection'
import Slidingtext from './Slidingtext'

const Body = () => {
    return (
        <div className='overflow-hidden'>
            <Herosection />
            <Slidingtext/>
        </div>
    )
}

export default Body
