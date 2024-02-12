import React from 'react'

const Slidingtext = () => {
    return (
        <div className='bg-[#1C161A] w-max overflow-x-hidden h-56 text-white flex text-8xl font-bold items-center justify-center'>
            {
                ['SHIRTS', 'JEANS', 'PARTY WEAR', 'ETHINIC WEAR', 'WESTERN'].map((item) => {
                    return <h1 className='slider tracking-wide'> {item+" "} </h1>
                })
            }
        </div>
    )
}

export default Slidingtext