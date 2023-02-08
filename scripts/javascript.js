// Burgermenu
const burgermenu = document.querySelector('.burgermenu_icon');
const navMenu = document.querySelector('.burgermenu_container');

// Open and close the burgermenu, when you click on it
burgermenu.addEventListener('click', mobileMenu);

function mobileMenu() {
  burgermenu.classList.toggle('active');
  navMenu.classList.toggle('active');
}

// hide the burgermenu when you click on a menu link
const navLink = document.querySelectorAll('.nav_link');

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
  burgermenu.classList.remove('active');
  navMenu.classList.remove('active');
}

// Slider
const images = document.querySelectorAll('.slider_switch');
let current = 0;

setInterval(() => {
  // Hide current image
  images[current].style.display = 'none';

  // Increment current image index and reset it to 0 if it exceeds the number of images
  current = (current + 1) % images.length;

  // Show next image
  images[current].style.display = 'block';
}, 7000);
