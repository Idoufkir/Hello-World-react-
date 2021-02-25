import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';


function Nav() {

    const navStyle= {
        color: 'white'
    };
    return (
        <nav>
            <Link style={navStyle} to="/">
            <h3>Azul React Js!</h3>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to="/idoufkir">
                    <li>IDOUFKIR Mustafa</li>
                </Link>
                <Link style={navStyle} to="mouissi">
                    <li>MOUISSI Ibrahim</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
