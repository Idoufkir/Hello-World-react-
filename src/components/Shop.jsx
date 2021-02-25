import React from 'react';
import '../App.css';
import LogoImg  from "./img/idoufkir.jpg";

function Shop() {
    return(
        <div class="container card mt-5">
        <div class="row card-body">
            <div class="col-3">
                <img class="w-75 border border-secondary" src={LogoImg} alt="bug"/>
            </div>
            <div class="col-9">
                <h5 class="card-title">IDOUFKIR Mustafa</h5><br></br>
                <b>Développeur full stack</b><br></br>
                <p class="card-text">A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Laravel and some other cool libraries and frameworks.</p>
                <hr/>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <hr/>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <hr/>
            </div>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
    </div>
    );
}

export default Shop;