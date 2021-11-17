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


const loadModal = (i) => {

  const photoDiv = document.createElement('div');
  photoDiv.classList.add('meal_photo');
  modal.appendChild(photoDiv);
  const image = document.createElement('img');
  image.src = meals[0].strMealThumb;
  // image.alt = 'Roast Chicken';
  image.height = '300';
  photoDiv.appendChild(image);
  const closeBtn = document.createElement('i');
  closeBtn.classList.add('fas');
  closeBtn.classList.add('fa-times');
  closeBtn.classList.add('close_btn');
  photoDiv.appendChild(closeBtn);
  const dishTitle = document.createElement('h3');
  dishTitle.classList.add('dish_title');
  dishTitle.innerHTML = meals[0].strMeal;
  modal.appendChild(dishTitle);
  const dishInfo = document.createElement('div');
  dishInfo.classList.add('dish_info');
  modal.appendChild(dishInfo);
  const category = document.createElement('p');
  const mainI = document.createElement('p');
  const area = document.createElement('p');
  const video = document.createElement('p');
  category.innerHTML = 'Category: ' + meals[0].strCategory;
  mainI.innerHTML = 'Main ingredient: '+ meals[0].strIngredient1;
  area.innerHTML = 'Area: '+ meals[0].strArea;
  video.innerHTML = 'Youtube:'+ `<a href="${meals[0].strYoutube}">Tutorial</a>`;
  dishInfo.appendChild(category);
  dishInfo.appendChild(mainI);
  dishInfo.appendChild(area);
  dishInfo.appendChild(video);
  const comments = document.createElement('div');
  comments.classList.add('comments');
  modal.appendChild(comments);
  const commentTitle = document.createElement('h3');
  commentTitle.id = 'comment_title';
  comments.appendChild(commentTitle);
  commentTitle.innerHTML = 'Comments';
  const commentDiv = document.createElement('div');
  comments.appendChild(commentDiv);
  commentDiv.innerHTML += '<p class="comment">Comment: Comment 1</p>';
  const form = document.createElement('form');
  form.id = 'comment_form';
  modal.appendChild(form);
  const formTitle = document.createElement('h3');
  formTitle.innerHTML = 'Add a comment';
  form.appendChild(formTitle);
  const nameInp = document.createElement('input');
  nameInp.type = 'text';
  nameInp.placeholder = 'Your name';
  nameInp.className = 'form_item';
  nameInp.required = true;
  form.appendChild(nameInp);
  const commentText = document.createElement('textarea');
  commentText.name = 'insights';
  commentText.id = 'insight';
  commentText.cols = '30';
  commentText.rows = '10';
  commentText.className = 'form_item';
  commentText.placeholder = 'Your Comment';
  commentText.required = true;
  form.appendChild(commentText);
  const submitCom = document.createElement('button');
  submitCom.type = 'submit';
  submitCom.className = 'form_item';
  submitCom.id = 'submit_btn';
  submitCom.innerHTML = 'Comment';
  form.appendChild(submitCom);
  const closeModal = () => {
    if(!modal.classList.contains('hidden')){
      modal.classList.add('hidden')
    }  
  }
  closeBtn.addEventListener('click', closeModal);
};


meals.forEach((meal) => {
  
});

export {loadModal, meals}