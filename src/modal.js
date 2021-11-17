const meals = [
  {
    idMeal: '52795',
    strMeal: 'Chicken Handi',
    strCategory: 'Chicken',
    strArea: 'Indian',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
    strYoutube: 'https://www.youtube.com/watch?v=IO0issT0Rmc',
    strIngredient1: 'Chicken',
  },
  {
    idMeal: '52956',
    strMeal: 'Chicken Congee',
    strCategory: 'Chicken',
    strArea: 'Chinese',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/1529446352.jpg',
    strYoutube: 'https://www.youtube.com/watch?v=kqEfk801E94',
    strIngredient1: 'Chicken',
  },
  {
    idMeal: '52831',
    strMeal: 'Chicken Karaage',
    strCategory: 'Chicken',
    strArea: 'Japanese',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg',
    strYoutube: 'https://www.youtube.com/watch?v=XivddFddthc',
    strIngredient1: 'Chicken thigh',
  },
];

const modal = document.querySelector('.modal');

const loadModal = () => {
  const photoDiv = document.createElement('div');
  modal.appendChild(photoDiv);
  const image = document.createElement('img');
  image.src = 'https://static01.nyt.com/images/2020/03/25/dining/18clark-roast-chicken/clark-roast-chicken-superJumbo-v4.jpg';
  photoDiv.appendChild(image);
  const bigTitle = document.createElement('h1');
};

meals.forEach((meal) => {

});
