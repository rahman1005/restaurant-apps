
import UrlParser from '../../routes/url-parser';
import RestaurantDB from '../../data/data-source';
import { createDetailRestoTemplate, createFoodList, createDrinkList, } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
const Detail = {
  async render() {
    return `
    <div id="resto">
      
    </div>
    
   
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDB.detail(url.id);
    const restoContainer = document.querySelector('#resto');
     restoContainer.innerHTML = createDetailRestoTemplate(resto);
   
    const foodMenu = document.querySelector("#food-menu");
    resto.restaurant.menus.foods.forEach(food => {
        foodMenu.innerHTML += createFoodList(food)      
    });
    const drinkMenu = document.querySelector("#drink-menu");
    resto.restaurant.menus.drinks.forEach(drink => {
        drinkMenu.innerHTML += createDrinkList(drink)      
    });
  
    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      resto,
    });
    


  },
};
 
export default Detail;