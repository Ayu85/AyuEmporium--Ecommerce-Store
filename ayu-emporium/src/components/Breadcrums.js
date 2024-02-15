import React from 'react'
import { NavLink } from 'react-router-dom'
const Breadcrums = ({ path ,prod}) => {
    return (
        <div className='font-bold text-md pt-4 pl-24'>
            <div><NavLink to={'/'}><span >HOME</span></NavLink>/<NavLink to={'/'}><span >CATEGORIES</span></NavLink>/{path === "/categories/1" && 'MENS WEAR'}{path === "/details/2" && `MENS WEAR/${prod}`}</div>
        </div>
    )
}

export default Breadcrums
