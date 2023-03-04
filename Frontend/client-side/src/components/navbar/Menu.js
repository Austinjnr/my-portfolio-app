import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

function Menu() {
    return (
    <section>
        <nav className="navbar">
            <h3 className="logo">AUSTIN JNR</h3>

            <ul className='nav-links'>
                <Link to="/about">
                    <li>About Me</li>
                    </Link>
                <Link to="/resume">
                    <li>Resume</li> 
                    </Link>
                <Link to="/skills">
                    <li>Skills</li>
                    </Link>
             
            </ul>
        </nav>
    </section>
    );
}

export default Menu;