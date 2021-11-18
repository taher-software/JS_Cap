import './style.css';
import LOGO from './assets/Images/logo.jpg';
import { loadModal } from './modal.js';
import LIKE from './assets/Images/like.png';
import COMMENT from './assets/Images/comment.png';
import { consumeMeals, counterHomeItems } from './consume_meals.js';

import { getLikes, postLikes, addNewLike } from './manage-likes.js';

// declarate variables //
const header = document.querySelector('header');
const cards = document.querySelector('.items');
// build the home page header //
header.innerHTML = `<img src=${LOGO} alt='logo'>`
  + '<p class="chicken"> Chicken meals(6)</p>'
  + '<p> Sea food meals</p>'
  + '<p> Meat meals </p>';
header.className = 'header';
const load = async () => {
  const res = await (consumeMeals());
  const itemsArray = res.meals;
  let i = 0;
  const itemsIndex = {};
  const resp = await getLikes().then((resp) => resp.json());
  let likes = [];
  if (resp.length > 0) {
    likes = resp;
  }
  while (!counterHomeItems(cards, 6)) {
    const item = itemsArray[i];
    if ((!!item.strMeal) && (item.strMeal !== '') && (!!item.strMealThumb)) {
      itemsIndex[i] = item.idMeal;
      let j = likes.length;
      let nbrLikes = 0;
      if (j > 0) {
        for (let k = 0; k < likes.length; k += 1) {
          const itemObj = likes[k];
          if (itemObj.item_id === itemsIndex[i]) {
            nbrLikes = itemObj.likes;
            break;
          }
          j -= 1;
        }
      }
      if (j === 0) {
        nbrLikes = 0;
        postLikes(itemsIndex[i], nbrLikes);
      }
      const div = document.createElement('div');
      div.innerHTML = `<img src=${item.strMealThumb} alt = 'image item' class='image-item'>`
      + `<div class='item-data'><p>${item.strMeal}</p><img src=${LIKE} alt='like icon' class='like'></div>`
      + `<p class='likes-nbr'><span>${nbrLikes}</span> likes</p>`
      + `<button class="btn" id = "${itemsIndex[i]}"> <span>Comments</span> <div class='comment-icon'><img src=${COMMENT} ></div></button>`;
      div.className = 'card';
      div.style.gridColumn = `${(i % 3) + 1}/ span 1`;
      div.style.gridRow = `${Math.floor(i / 3) + 1}/ span 1`;
      cards.appendChild(div);
      const btn = document.getElementById(`${itemsIndex[i]}`);
      btn.addEventListener('click', () => {
        loadModal(itemsArray, item.idMeal);
      });
    }
    i += 1;
  }
  const likesIcones = Array.from(document.querySelectorAll('.like'));
  likesIcones.forEach((likeImage) => {
    const ind = likesIcones.findIndex((el) => el === likeImage);
    const id = itemsIndex[ind];
    likeImage.addEventListener('click', (e) => {
      addNewLike(e, id);
    });
  });
};
load();
