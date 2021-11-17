import './style.css';
import LOGO from './assets/Images/logo.jpg';
import{loadModal, meals} from './modal.js'

const header = document.querySelector('header');

header.innerHTML = `<img src=${LOGO} alt='logo'>`
  + '<p class="chicken"> Chicken meals(6)</p>'
  + '<p> Sea food meals</p>'
  + '<p> Meat meals </p>';
header.className = 'header';





loadModal();
