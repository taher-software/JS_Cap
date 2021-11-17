import './style.css';
import LOGO from './assets/Images/logo.jpg';

const header = document.querySelector('header');

header.innerHTML = `<img src=${LOGO} alt='logo'>`
  + '<p class="chicken"> Chicken meals(6)</p>'
  + '<p> Sea food meals</p>'
  + '<p> Meat meals </p>';
header.className = 'header';

const modal = document.querySelector('.modal');

const loadModal = () => {
  const photoDiv = document.createElement('div');
  photoDiv.classList.add('meal_photo');
  modal.appendChild(photoDiv);
  const image = document.createElement('img');
  image.src = 'https://static01.nyt.com/images/2020/03/25/dining/18clark-roast-chicken/clark-roast-chicken-superJumbo-v4.jpg';
  image.alt = 'Roast Chicken';
  image.height = '300';
  photoDiv.appendChild(image);
  const closeBtn = document.createElement('i');
  closeBtn.classList.add('fas');
  closeBtn.classList.add('fa-times');
  closeBtn.classList.add('close_btn');
  photoDiv.appendChild(closeBtn);
  const dishTitle = document.createElement('h3');
  dishTitle.classList.add('dish_title');
  dishTitle.innerHTML = 'Roast Chicken';
  modal.appendChild(dishTitle);
  const dishInfo = document.createElement('div');
  dishInfo.classList.add('dish_info');
  modal.appendChild(dishInfo);
  const category = document.createElement('p');
  const mainI = document.createElement('p');
  const area = document.createElement('p');
  const video = document.createElement('p');
  category.innerHTML = 'Category:Chicken';
  mainI.innerHTML = 'Main ingredient: Chicken';
  area.innerHTML = 'Area: US';
  video.innerHTML = 'Youtube:Link';
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
};

loadModal();
