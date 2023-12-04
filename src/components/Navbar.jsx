import React from 'react';
import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <div id='nav'>
                
            <div>
            <NavLink to='/'id='navbar'>Home</NavLink>
            <NavLink to='/Pages' id='navbar'>Pages</NavLink>
            <NavLink to='/Blog' id='navbar'>Blog</NavLink>
            <NavLink to='/Contact' id='navbar'>Contact</NavLink>
            <NavLink to='/Login' id='navbar'>login</NavLink>
            </div>
            </div>
        </div>
    )
}

export default Navigation