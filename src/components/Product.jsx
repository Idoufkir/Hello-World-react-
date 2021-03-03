import React from 'react';
import '../App.css';
import LogoImg from "./img/mouissi.png";

function Product() {
    return (
        <div class=" mx-auto bg-white rounded-lg shadow-sm overflow-hidde md:max-w-6xl p-5">
            <div class="md:flex">
                <div class="md:flex-shrink-0">
                    <img class="bg-auto object-contain" src={LogoImg} alt="Man looking at item at a store" />
                </div>
                <div class="py-5">
                    <div class="text-lg text-indigo-500  font-semibold">
                            MOUISSI Ibrahim
                    </div>
                    <a href="#" class="block mt-4 text-lg leading-tight font-medium text-black hover:underline">
                            DÉVELOPPEUR WEB FULL STACK
                    </a>
                    <p class="mt-2 text-justify p-5 ">
                            Bilingue. Rompu à la programmation dès mon plus jeune âge, j'ai codé dans divers langages (JavaScript, PHP...) et participé également à plusieurs projets orientés web.
                            Capable de maitriser les différentes étapes techniques de création d'un site internet professionnel, du déploiement au référencement, ou de se fondre dans une équipe avec une tâche spécifique.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Product;