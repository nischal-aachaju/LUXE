import React, { useEffect, useState } from 'react'
import axios from "axios"

const Collections = () => {
    const [img, setImg] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                "https://dummyjson.com/products?limit=10"
            )
            const imageUrl = response.data.products[1].images[0]
            console.log("dsf ab");
 
            setImg(imageUrl)
        }

        fetchData()
    }, [])

    const hello = () => {
        const a = console.log("dfd");

    }
    hello()

    return (
        <div className='h-screen w-full flex gap-5 items-center'>
            <div className='h-60 w-40 bg-amber-600'></div>

            {img ? (
                <img className='h-60 w-40 object-cover' src={img} alt="product" />
            ) : (
                <p>Loading image...</p>
            )}
        </div>
    )
}

export default Collections
