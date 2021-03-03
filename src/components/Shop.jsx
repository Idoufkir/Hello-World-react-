import React from 'react';
import '../App.css';
import LogoImg  from "./img/idoufkir.jpg";

function Shop() {
    return(
        <div class=" mx-auto bg-white rounded-lg shadow-sm overflow-hidde md:max-w-6xl p-5">
            <div class="md:flex">
                <div class="md:flex-shrink-0">
                    <img class="object-full" src={LogoImg} alt="Man looking at item at a store" />
                </div>
                <div class="py-5">
                    <div class="text-lg text-indigo-500  font-semibold">
                            IDOUFKIR Mustafa
                    </div>
                    <a href="#" class="block mt-4 text-lg leading-tight font-medium text-black hover:underline">
                            DÉVELOPPEUR WEB FULL STACK
                    </a>
                    <div class="mt-2 text-justify p-5 ">
                    A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Laravel and some other cool libraries and frameworks.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;