import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Home({ posts, handleDelete }) {

    const [search, setSearch] = useState('');

    const filteredPosts = posts.filter((e) => (
        e.title.toLowerCase().includes(search.toLowerCase()) || (e.description && e.description.toLowerCase().includes(search.toLowerCase()))
    ));
    console.log(filteredPosts)

    function editPost(){
        
    }
    
    return (
        <div className='addProduct'>
            <nav className="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#">Bakery</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Items</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" aria-disabled="true"><Link className='text-decoration-none text-white' to='/add'>Add Products</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container-fluid bg-body-tertiary h-100">
                <div className="row">

                    <div className="col-lg-12 d-flex flex-wrap justify-content-start align-items-center">
                        <div className='w-25 mt-5'>
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search by filter...' className='form-control' />
                        </div>

                        {
                            filteredPosts.map((el) => (
                                <>
                                    <div key={el.id} className='shadow-sm me-3 mt-5 mb-5 p-3 w-25'>
                                        <div>
                                            <h5>{el.title}</h5>
                                            <img src={URL.createObjectURL(el.image)} alt="" className='w-100 mt-2 mb-2'/>
                                            <p>{el.content}</p>
                                            <h6>Total items: {el.number}</h6>
                                            <hr />
                                            <button className='btn btn-dark text-white me-2' onClick={() => editPost(el.id)}><Link to={`/edit/:${el.id}`} className='text-decoration-none text-white'>Edit</Link></button>
                                            <button type='button' className='btn btn-dark text-white' onClick={() => handleDelete(el.id)}>Delete</button>
                                        </div>
                                    </div>
                                </>

                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
