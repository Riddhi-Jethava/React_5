import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

function NavBar() {
    return (
        <div>
            <navbar>
                <div className="conatiner p-4 bg-ternary border">
                    <div className="row justify-content-between">
                        <div className="col-lg-2 text-center pt-2">
                            <a href="" className='text-decoration-none text-dark fw-bolder'><h5>D E P O T</h5></a>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-evenly pt-2" id='links'>
                            
                            <Link to="/" className="text-decoration-none text-dark">
                                Home
                            </Link>
                            <Link to="/about" className='text-decoration-none text-dark'>
                                About
                            </Link>
                            <Link to="/shop" className='text-decoration-none text-dark'>
                                Shop
                            </Link>
                            <Link to="/port" className='text-decoration-none text-dark'>
                                Portfolio
                            </Link>
                            <Link to="/blog" className='text-decoration-none text-dark'>
                                Blog
                            </Link>
                            <Link to="/ele" className='text-decoration-none text-dark'>
                                Elements
                            </Link>
                            
                        </div>  
                        <div className="col-lg-2">
                            <div className='d-flex justify-content-evenly'>

                                <button className='btn ps-2 pe-2 pb-1'>
                                    <IoSearchSharp />
                                </button>

                                <button className='btn ps-2 pe-2 pb-1'>
                                    <FaRegUser />
                                </button>

                                <button type="button" class="btn position-relative">
                                    <FaRegHeart />
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        0
                                        <span class="visually-hidden">unread messages</span>
                                    </span>
                                </button>

                                <button type="button" class="border border-white bg-white">
                                    cart<span class="badge text-secondary">($4)</span>
                                </button>

                                {/* <CiMenuFries/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </navbar>
        </div>
    )
}

export default NavBar
