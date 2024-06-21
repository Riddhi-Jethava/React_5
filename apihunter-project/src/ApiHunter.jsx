import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function ApiHunter() {
    const [data, setDate] = useState({
        title: '',
        number: '',
        name: '',
        genre: '',
        Discription: ''
    })

    const handleInput = (event) => {
        setDate({ ...data, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        console.log(data)
        event.preventDefault()
        axios.post('http://localhost:3000/data', data)
            .then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='main'>
            <nav class="navbar navbar-expand-lg w-100 p-0">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <form action="" onSubmit={handleSubmit} className='rounded rounded-3 d-flex justify-content-evenly flex-column ps-3 p-4 fs-6 mt-5'>
                {/* <h5>Movie API</h5> */}
                name :
                <input className='form-control bg-transparent' type="text" name="title" id="" onChange={handleInput} value={data.title} />
                
                genre :
                <input className='form-control bg-transparent' type="text" name="genre" id="" onChange={handleInput} value={data.genre} />
                
                Year :
                <input className='form-control bg-transparent' type="number" name="number" id="" onChange={handleInput} value={data.number} />
                
                Directore :
                <input className='form-control bg-transparent' type="text" name="name" id="" onChange={handleInput} value={data.name} />
                
                Discription :
                <input className='form-control bg-transparent' type="text" name="Discription" id="" onChange={handleInput} value={data.Discription} />
                <button className='btn btn-primary text-white mt-2'>submit</button>
            </form>
        </div>
    )
}

export default ApiHunter
