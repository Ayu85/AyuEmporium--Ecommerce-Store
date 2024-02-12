import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-between py-2 px-10' >
            <div><h1 className='page_title text-3xl'>AyuEmporium</h1></div>
            <div >
                <ul className='flex gap-4 font-semibold text-lg'> {
                    ['Home', 'Shop', 'Carrers', 'About'].map((list_items) => {
                        return <li>{list_items}</li>
                    })
                }</ul>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Header
