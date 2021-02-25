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
            <h3>Hello World</h3>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to="/shop">
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to="product">
                    <li>Product</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
