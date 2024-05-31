import React from 'react'
import { useState, useEffect } from 'react'

function FetchData() {
    const [Data, setData] = useState(null)
    useEffect(() => {
        const fetchingData = async () => {
            // let response = await fetch('https://api.sampleapis.com/cartoons/cartoons2D')
            let response = await fetch('https://fakestoreapi.com/products')
            let jsonData = await response.json()
            console.log(jsonData)
        }
        fetchingData()
    }, [])

    

    return (
        <div>
            {
                Data && Data.map((e) => {
                    return <>
                        <div className='product'>
                            <img src={e.image} alt="" />
                            <h4>{e.title}</h4>
                            <h3>{e.price}</h3>
                            <p>{e.discription}</p>
                        </div>
                    </>
                })
            }
        </div>
    )
}

export default FetchData
