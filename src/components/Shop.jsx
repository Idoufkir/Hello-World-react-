import React from 'react';
import '../App.css';
import LogoImg from "./img/idoufkir.jpg";

function Shop() {
    return (
        <div class=" mx-auto bg-white rounded-lg shadow-sm overflow-hidde p-5">
            <div class="xl:flex">
                <div className="flex flex-wrap justify-center">
                    <div className="px-5">
                        <img src={LogoImg} alt="..." className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                </div>
                <div class="p-5">
                    <div class="text-lg text-indigo-500 font-semibold">
                            IDOUFKIR Mustafa
                    </div>
                    <div class="block mt-4 text-lg leading-tight font-medium text-black hover:underline">
                        <h3>DÉVELOPPEUR WEB FULL STACK</h3>
                    </div>
                    <div class="mt-6 md:max-h-2md text-center py-5">
                        <p>
                        A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Laravel and some other cool libraries and frameworks.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;