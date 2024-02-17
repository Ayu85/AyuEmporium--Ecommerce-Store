import React from 'react'
import Header from './Header'
import Herosection from './Herosection'
import Slidingtext from './Slidingtext'
import Whyus from './Whyus'
import Categories from './Categories'
import ProfilePage from './ProfilePage'

const Body = () => {
    return (
        <div className='overflow-hidden'>
            <ProfilePage/>
            <Herosection />
            <Slidingtext/>
            <Whyus/>
            <Categories/>
        </div>
    )
}

export default Body
