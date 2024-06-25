import React from 'react'
import { Link } from 'react-router-dom'

function GlassNavbar() {
    return (
        <div>
            <header className="navbar border">
                <ul className='d-flex justify-content-evenly align-items-center w-50'>
                    <li>
                        <Link to='/inpbox' className='text-decoration-none text-white'>InputBox</Link>
                    </li>
                    <li>
                        <Link to='/textimg' className='text-decoration-none text-white'>TextImage</Link>
                    </li>
                    <li>
                        <a href=""></a>
                    </li>
                    <li>
                        <a href=""></a>
                    </li>
                    <li>
                        <a href=""></a>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default GlassNavbar
