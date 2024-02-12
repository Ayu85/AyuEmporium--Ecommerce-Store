import React from 'react'
import Header from './Header'
import Herosection from './Herosection'
import Slidingtext from './Slidingtext'
import Whyus from './Whyus'

const Body = () => {
    return (
        <div className='overflow-hidden'>
            <Herosection />
            <Slidingtext/>
            <Whyus/>
        </div>
    )
}

export default Body
