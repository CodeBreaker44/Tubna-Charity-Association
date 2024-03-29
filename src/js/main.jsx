// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'



function toggleMobileMenu() {
    var menu = document.querySelector('.navbar-menu');
    var social = document.querySelector('.navbar-social');
    var actions = document.querySelector('.navbar-actions');
    menu.classList.toggle('active');
    social.classList.toggle('active');
    actions.classList.toggle('active');
  }
  