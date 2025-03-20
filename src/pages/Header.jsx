import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">MyLogo</h1>
                <nav>
                    <ul className="nav-menu">
                        <li><a href="#" className="nav-link">Home</a></li>
                        <li><a href="#" className="nav-link">About</a></li>
                        <li><a href="#" className="nav-link">Services</a></li>
                        <li><a href="#" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header