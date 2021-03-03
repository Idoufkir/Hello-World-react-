import '../App.css';
import LogoImg from "./img/mouissi.png";

function Product() {
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
                        MOUISSI Ibrahim
                    </div>
                    <div class="block mt-4 text-lg leading-tight font-medium text-black hover:underline">
                        <h3>DÉVELOPPEUR WEB FULL STACK</h3>
                    </div>
                    <div class="mt-6 md:max-h-2md text-center py-5">
                        <p>
                        Bilingue. Rompu à la programmation dès mon plus jeune âge, j'ai codé dans divers langages (JavaScript, PHP...) et participé également <br/> à plusieurs projets orientés web. Capable de maitriser les différentes étapes techniques de création d'un site internet professionnel,<br/> du déploiement au référencement, ou de se fondre dans une équipe avec une tâche spécifique.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;