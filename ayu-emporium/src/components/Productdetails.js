import React, { useEffect, useState } from 'react'
import { Header2 } from './Header'
import { useParams } from 'react-router-dom'
import { menswear } from './utils/__mocks__'
const Productdetails = () => {
    const prodId = useParams()
    const [id] = useState(prodId.id)
    const [data, setData] = useState(null)
    useEffect(() => {
        const d = filterData()
        setData(d[0])
    }, [])
    console.log(data);
    const filterData = () => {
        return menswear.filter((items) => {
            return items.id == id
        })
    }

    return (
        <div>
            <Header2 />

        </div>
    )
}

export default Productdetails
