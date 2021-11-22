
import CONFIG from "../../globals/config";

const createHomeTemplate = (resto) =>`
<article class="post-item">
<img class="post-item_thumbnail" src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}"  alt="Gambar ${resto.name} ">
<div class="post-item_content">
<p class="city">${resto.city}</p>
<p class="rating">${resto.rating}</p>
<h1 class="post-item__title"><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h1>
</div>
</article>
`;

const createDetailRestoTemplate = (resto)=> `
<h2 class="post-name-detail">${resto.restaurant.name}</h2>
<div class="container-detail">
    <div class="image-detail">
        <img src="${CONFIG.BASE_IMAGE_URL}${resto.restaurant.pictureId}" alt="${resto.restaurant.name}" />
        <div class="menu-list">
            <div id="food-menu">
                <p>Makanan</p>
            </div>
            <div id="drink-menu">
                <p>Minuman</p>
            </div>
          

    </div>
    </div>
    <div class="text-detail">
        <p class="city-detail">${resto.restaurant.city}</p>
        <p class="address-detail">${resto.restaurant.address}</p>
        <p class="rating-detail">${resto.restaurant.rating}</p>
        <p class="description-detail">${resto.restaurant.description} minutes</p>
    </div>
    <div id="likeButtonContainer"></div>
    
</div>
`;
const createFoodList =(food)=>`
        
            <ul>
                <li>
                 ${food.name}
                </li>
            </ul>
        
       

`;
const createDrinkList=(drink)=>`
    <div id="drink-menu">
        <ul>
            <li>
                ${drink.name}
            </li>
        </ul>
    </div>
`;
const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {createHomeTemplate, 
        createDetailRestoTemplate, 
        createFoodList,
        createDrinkList,
        createLikeButtonTemplate,
        createLikedButtonTemplate };