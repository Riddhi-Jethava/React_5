import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AddPage({addEmployee}) {
    const[image, setImage] = useState(null)

    function handleSubmit(e){
        e.preventDefault();
        addEmployee(image);
        console.log(image)
        setImage(null);
    }

    function handleImageChange(e) {
        setImage(e.target.files[0])
    }

    return (
        <div className='container-fluid' id='employeePage'>
            <div className='row justify-content-center'>
                <div className="col-lg-12 border p-3">
                    <nav>
                        <div className="col-lg-3">
                            <h4>Employee Data</h4>
                        </div>
                        <div className="col-lg-3">
                        
                        </div>
                    </nav>
                </div>
                <div className="col-lg-5 shadow-sm mt-5 border rounded rounded-3">
                    <form action="" className='p-4' onSubmit={handleSubmit}>
                        <h6>Employee details_</h6>
                        <label htmlFor="employeeImage" className='mt-3 mb-1'>Employee Photo</label>
                        <input type="file" id='employeeImage' className='form-control' onChange={handleImageChange}/>

                        <label htmlFor="" className='mt-3 mb-1'>Name</label>
                        <input type="text" className='form-control'/>

                        <label htmlFor="" className='mt-3 mb-1'>E-mail</label>
                        <input type="text" className='form-control'/>

                        <label htmlFor="" className='mt-3 mb-1'>Ph. Number</label>
                        <input type="text" className='form-control'/>

                        <label htmlFor="" className='mt-3 mb-1'>Joining Date</label>
                        <input type="text" className='form-control'/>

                        <label htmlFor="" className='mt-3 mb-1'>Post</label>
                        <input type="text" className='form-control'/>

                        <label htmlFor="" className='mt-3 mb-1'>Back Account no.</label>
                        <input type="text" className='form-control' name="" id=""/>

                        <label htmlFor="" className='mt-3 mb-1'>Salary</label>
                        <input type="text" className='form-control'/>

                        <button type='submit' className='btn btn-primary mt-3 me-3'>add</button>
                        <button type='button' className='btn btn-primary mt-3'> <Link to='/' className='text-white text-decoration-none'>Back</Link></button>
                    </form>
                </div>
            </div>
           
        </div>
    )
}

export default AddPage
