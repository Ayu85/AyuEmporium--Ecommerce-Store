import React from 'react'
import CategoryCard from './CategoryCard'
import { categories } from './utils/__mocks__'
import { Link, useLocation } from 'react-router-dom'
const Categories = () => {
  
  return (
    <div className='bg-[#FFF8F4] flex gap-8 flex-wrap justify-center pt-20 '>
      {categories.map((categ) => {
        return <Link to={`/categories/${categ.id}`}><CategoryCard {...categ} /></Link>
      })}
    </div>
  )
}

export default Categories
