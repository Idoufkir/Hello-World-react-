import React from 'react';
import '../../index.css';
import {Link} from 'react-router-dom';


function Nav() {

    const navStyle= {
        color: '#f0fff0'
    };
    return (
<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-500 mb-3">
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <div className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
        <Link style={navStyle} to="/">
        <h3>Azul React !!</h3>
        </Link>
      </div>
      <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul className="flex flex-col lg:flex-row list-none ml-auto">
          <li className="nav-item">
            <div className="px-5 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-50">
              <Link style={navStyle} to="/idoufkir">
              <li>Mustafa IDOUFKIR</li>
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <div className="px-5 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-50">
              <Link style={navStyle} to="/mouissi">
              <li>Ibrahim MOUISSI</li>
              </Link>
            </div>
          </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Nav;
