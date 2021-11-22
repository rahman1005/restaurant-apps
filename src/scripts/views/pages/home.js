import RestaurantDB from "../../data/data-source";
import { createHomeTemplate } from "../templates/template-creator";
const Home ={
    async render(){
        return `
        <section id="maincontent" class="content">
       
        <div class="explore_menu">
            <h1 class="menu_label">Explore Restaurant</h1>
            <div class="posts">
            </div>
        </div>
        </section>
        `;
    },


    async afterRender(){
        const resto = await RestaurantDB.home();
        const restoContainer = document.querySelector(".posts");
        resto.forEach(resto => {
            restoContainer.innerHTML += createHomeTemplate(resto);
            
        });
    },
};


export default Home;