import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <li> <a href='/'>Home</a></li>
                    <li> <a>About Us</a></li>
                    <li> <a>How it works</a></li>
                    <li> <a>Contact Us</a></li>
                </ul>
            </nav>
        </div>
    )
}
