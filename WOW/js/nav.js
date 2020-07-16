let lis = document.querySelectorAll('li');

lis.forEach(li => {
    li.addEventListener('click', function () {
        lis.forEach(li => li.classList.remove('active'));
        this.classList.add('active');
    });
});


const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.navbar');
const menuNav = document.querySelector('.navbar-nav');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}

