import React from 'react';
import '../App.css';
import LogoImg  from "./img/mouissi.png";

function Product() {
    return(
        <div class="container card mt-5">
            <div class="row card-body">
                <div class="col-3">
                    <img class="w-75 border border-secondary" src={LogoImg} alt="bug"/>
                </div>
                <div class="col-9">
                    <h5 class="card-title">MOUISSI Ibrahim</h5><br></br>
                    <b>DÉVELOPPEUR WEB FULL STACK</b><br></br>
                    <p class="card-text">Bilingue. Rompu à la programmation dès mon plus jeune âge, j'ai codé dans divers langages (JavaScript, PHP...) et participé également à plusieurs projets orientés web.
Capable de maitriser les différentes étapes techniques de création d'un site internet professionnel, du déploiement au référencement, ou de se fondre dans une équipe avec une tâche spécifique.</p>
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

export default Product;