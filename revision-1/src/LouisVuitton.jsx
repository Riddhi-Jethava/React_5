import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";

function LouisVuitton() {
    return (
        <div>
            <header>
                <nav class="navbar fixed-top shadow-sm bg-white">
                    <div class="container-fluid">
                        <div className="row d-flex justify-content-between align-items-center w-100 p-3">
                            <div className="col-lg-2 d-flex justify-content-evenly align-items-center ">
                                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" className='border border-white bg-white'>
                                    <span class="navbar-toggler-icon me-2"></span>menu
                                </button>
                                <h6 className='border w-auto ps-3 pe-3 pt-2 pb-2 border-white mt-2'><IoIosSearch /> Search</h6>
                                <div class="offcanvas offcanvas-start p-3" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                                    <div class="offcanvas-header w-25">
                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 fs-5 p-3">
                                            <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="#">Gifts</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">News</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Bags</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Women</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Men</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Jewellery</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Watches</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Perfumes</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Art of Living</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Services</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">World of Louis Vuition</a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Perfumes</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Art of Living</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Services</a>
                                            </li>
                                            <li class="nav-item pb-5">
                                                <a class="nav-link" href="#">World of Louis Vuition</a>
                                            </li>
                                            <hr />
                                            <h6 className='mt-5 mb-3'>Sustainability</h6>
                                            <h6 className='mb-3'>Find a store</h6>
                                            <h6 className='mb-3'>India</h6>
                                            <h6 className='mb-3'>can we help you?</h6>
                                            <h6 className='pb-5'>1800 103 9988</h6>

                                            <h6>Accessibility: Enhanced contrast</h6>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 ">
                                <h5>LOUIS VUITTON</h5>
                            </div>
                            <div className="col-lg-2 d-flex justify-content-center">

                                <button class="border border-white bg-white d-flex" type="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" className='fs-5 border border-white bg-white'>Call us <AiOutlineHeart className='fs-5'/></button>

                                <div class="offcanvas offcanvas-end border border-white shadow-sm" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style={{ width: "680px" , paddingLeft: "95px" , paddingTop:"50px" , paddingRight:"30px" }}>
                                    <div class="offcanvas-header">
                                        <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Call Us</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body mt-3 mb-3">
                                        <p style={{fontSize: "15px"}}>Wherever you are, Louis Vuitton Client Advisors will be delighted to assist you</p>
                                        <a href="" className='mt-2'> <IoPhonePortraitOutline className='me-2'/> 1800 103 9988</a>
                                        <a href="" className='mt-2'> <IoMailOutline className='me-2'/> Send an Email</a>
                                        <a href="" className='mt-2'> <FaWhatsapp className='me-2'/> WhatsApp</a>
                                        <a href="" className='mt-2'> <FaMessage className='me-2'/> Apple Message</a>
                                        <a href="" className='mt-2'> <FaFacebookMessenger className='me-2'/> Facebook Messenger</a>

                                        <h5 className='mt-5'>Need Help ?</h5>

                                        <a href="">FAQ</a>
                                        <a href="">CARE SERVICE</a>
                                        <a href="">Find a Store</a>
                                    </div>
                                </div>

                                {/* --Account  */}
                                <button class="border border-white bg-white" type="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"> <LuUser className='fs-5'/></button>

                                <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel"  style={{ width: "680px" ,  paddingLeft: "75px" , paddingTop:"50px" , paddingRight:"30px" }}>
                                    <div class="offcanvas-header">
                                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">My Account</h5>
                                        
                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body mt-3 mb-5">
                                    <h5>I already have an account</h5>
                                        <label htmlFor="" className='mb-1 mt-4'>Login*</label>
                                        <input type="text" name="" id="" className='pt-4 border mb-3'/>
                                        <label htmlFor="" className='mb-1'>Password*</label>
                                        <input type="password" name="" id="" className='pt-4 border mb-3'/>
                                        <a href="">Forgot your password?</a>
                                        <button className='p-2 mt-3 mb-5 rounded rounded-5 text-white btn btn-dark'>Sign In</button>

                                        <hr />

                                        <h6 className='mt-5'>I don't have a My LV account</h6>
                                        <p className='mt-3 mb-3'>Enjoy added benefits and a richer experience by creating a personal account</p>
                                        <button className='p-2 rounded rounded-5 border bg-white'>Create your MyLV account</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
                {/* <iframe src="" frameborder="0"> */}
                    <video controls autoPlay muted>
                        <source src='https://lv-vod.fl.freecaster.net/vod/louisvuitton/zhhklHRpCA_HD.mp4'/>
                    </video>
                {/* </iframe> */}
            </header>
        </div>
    )
}

export default LouisVuitton
