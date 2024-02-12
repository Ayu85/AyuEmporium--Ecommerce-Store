import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-between py-3 px-10 bg-[#1c223d] ' >
            <div><h1 className='page_title text-3xl text-[#eab99f]'>AyuEmporium</h1></div>
            <div >
                <ul className='flex gap-4  text-lg text-white tracking-wide cursor-pointer'> {
                    ['Home', 'Shop', 'Carrers', 'About'].map((list_items) => {
                        return <li className=' hover:border-b border-[#eab99f] transition-all '>{list_items}</li>
                    })
                }</ul>
            </div>
            <div>
                <button className='px-4 py-1 rounded-lg bg-[#e1586c] font-semibold '>Log In</button>
            </div>
        </div>
    )
}

export default Header
