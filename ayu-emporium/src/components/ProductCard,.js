import React from 'react'

const ProductCard = ({ name, price, discount, about, image }) => {
    return (
        <div className='w-52 flex flex-col'>
            <div>
                <img src={image} alt='logo' className='w-52' />
            </div>
            <div>
                <h1>{name}</h1>
                <h1>{about}</h1>
                <h1>{price}{discount}</h1>
            </div>
        </div>
    )
}

export default ProductCard
