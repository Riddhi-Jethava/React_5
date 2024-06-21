import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function ApiHunter() {
    const[data , setDate] = useState({
        title : '',
        number : '',
        name: ''
    })

    const handleInput=(event)=>{
        setDate({...data, [event.target.name] : event.target.value})
    }

    const handleSubmit=(event)=>{
        console.log(data)
        event.preventDefault()
        axios.post ('http://localhost:3000/data',data)
        .then((res)=>{
            console.log(res)
        }) .catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit} className='rounded rounded-3 d-flex justify-content-evenly flex-column ps-3 p-4 fs-5'>
                <h5>Movie API</h5>
            name : 
                <input className='mt-1 mb-4 form-control bg-transparent' type="text" name="title" id="" onChange={handleInput} value={data.title}/>
            Year :
                <input className='mt-1 mb-4 form-control bg-transparent' type="number" name="number" id="" onChange={handleInput} value={data.number}/> 
            Directore :
                <input className='mt-1 mb-4 form-control bg-transparent' type="text" name="name" id="" onChange={handleInput} value={data.name}/> 
            <button className='btn btn-primary text-white'>submit</button>
        </form>
    </div>
  )
}

export default ApiHunter
