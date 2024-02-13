import React from 'react'
import { Header2 } from './Header'
import { useParams } from 'react-router-dom'

const Productdetails = () => {
    const id=useParams()
    console.log(id);
    return (
        <div>
            <Header2 />
          
        </div>
    )
}

export default Productdetails
