import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function HomePage({ posts }) {
  const [search, setSearch] = useState('')

  // const filteredPosts = posts.filter((e) => (
  //   e.title.toLowerCase().includes(search.toLowerCase())
  // ));
  // console.log(filteredPosts)
  console.log(posts)

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 border p-3">
            <nav className='d-flex justify-content-between'>
              <div className="col-lg-3">
                <h4>Employee</h4>
              </div>
              <div className="col-lg-4 d-flex justify-content-evenly align-items-center">
                <h6>Home</h6>
                <h6>About</h6>
                <h6>Blog</h6>
                <h6><Link to='/addEmployee' className='text-decoration-none'>Employee Details</Link ></h6>
                <h6>Contact</h6>
              </div>
            </nav>
          </div>
          <div className="col-lg-3 search ps-5 mt-5">
            <input type="search" onChange={(e) => setSearch(e.target.value)} placeholder='search by filter...' className='form-control' />
          </div>
        </div>
      </div>

      {
        posts && posts.map((el) => (
          <>
            <div key={el.id}>
              <div>
                <img src={URL.createObjectURL(el.image)} alt="" />
              </div>
            </div>
          </>
        ))
      }

      <button className='btn btn-secondary'><Link to='/addEmployee' className='text-white text-decoration-none'>add</Link ></button>

    </div>
  )
}

export default HomePage
