import React from 'react'
import "../styles/Navbar.css";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <div className="navbar-brand">
                    <Link to="/">Movie App</Link>
                </div>
                <div className="navbar-links">
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/favorite" className='nav-link'>Favorite  </Link>
                </div>
            </div>
        </nav>)
}

export default Navbar
