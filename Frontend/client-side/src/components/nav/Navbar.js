import React from 'react';
import { Link } from "react-router-dom"

function Menu() {
    return (  
        <section>
            <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        <ul>
         
            <li>Home</li>
       
         
            <li>About me</li>
       
        
            <li>Services</li>
       
       
            <li>Skills</li>
       
       
            <li>Contact</li>


            <li>Sign Out</li>
        </ul>
      </nav>
        </section>
    );
}

export default Menu;