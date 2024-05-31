import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiLogout } from "react-icons/ci";


function Add({ addProducts }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [number, setNumber] = useState('')
    const [image, setImage] = useState(null)

    function handleSubmit(e) {
        e.preventDefault();
        addProducts(title, content, number, image);
        setTitle('');
        setContent('');
        setNumber('')
        setImage(null)
    }

    function handleImageChange(e) {
        setImage(e.target.files[0])
    }

    return (
        <div className='addProduct'>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#">Bakery</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#"><Link to={'/'} className='me-3 text-decoration-none text-white'>Home</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Items</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid d-flex justify-content-center align-items-center h-100 bg-body-tertiary">
                <div className="row justify-content-center align-items-center w-50">
                    <div className="col-lg-10 shadow-lg rounded rounded-3 p-4">
                        <div className='d-flex justify-content-center'>
                            <img src="https://png.pngtree.com/png-clipart/20230301/ourmid/pngtree-bakery-logo-baker-illustration-png-image_6625246.png" alt="" className='logo'/>
                        </div>
                        <form action="" className='text-start ' onSubmit={handleSubmit} >
                            <label htmlFor="">Product Name</label>
                            <input type="text" value={title} name="" id="" className='form-control mt-1' onChange={(e) => setTitle(e.target.value)} />

                            <label htmlFor="productImage" className='mt-3'>Image</label>
                            <input type="file" id="productImage" className='form-control mt-1' onChange={handleImageChange} />

                            <label htmlFor="" className='mt-3'>Description</label>
                            <input type="text" value={content} name="" id="" className='form-control mt-1' onChange={(e) => setContent(e.target.value)} />
    
                            <label htmlFor="" className='mt-3'>How many items?</label>
                            <input type="number" value={number} name="" id="" className='form-control mt-1' onChange={(e) => setNumber(e.target.value)} />

                            <div>
                                <button type='submit' className='btn btn-primary mt-4'>ADD</button>
                                <button className='btn btn-danger mt-4 ms-2'><Link to={'/'}><CiLogout className='fs-4 text-white'/></Link></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Add
