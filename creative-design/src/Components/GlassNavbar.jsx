import React from 'react'
import { Link } from 'react-router-dom'

function GlassNavbar() {
    return (
        <div>
            <header className="navbar">
                <ul>
                    <li>
                        <Link to='/inpbox'><a href="">InputBox</a></Link>
                    </li>
                    <li>
                        <a href="">TextImage</a>
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
