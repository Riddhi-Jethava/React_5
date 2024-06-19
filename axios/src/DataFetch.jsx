import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let fetchData = async () => {
            try {
                let response = await axios.get('https://fakestoreapi.com/products')
                setData(response.data)
                setLoading(false)
            } catch (err) {
                console.log("Error")
                setLoading(false)
            }
        }

        fetchData()

    }, [])

    if (loading) {
        return <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>;
    }

    return (

        <div className='border d-flex flex-wrap justify-content-evenly'>
            {
                data.map((el) => (

                    <div key={el.id} className='border details mb-3 mt-2 p-3'>
                        <div className='ps-3 pt-2 overtext' style={{height:"250px"}}>
                            <h5>{el.title}</h5>
                            <h6 className='text-success mt-2 mb-2'>Price: {el.price}</h6>
                            <h6 className='text-secondary'>{el.description}</h6>
                            <h6>{el.category}</h6>
                        </div>
                        {/* <hr /> */}
                    </div>
                ))
            }
        </div>
    )
}

export default DataFetch




