const  headerBurger = document.querySelector('.header__burger');
const  menuHeader = document.querySelector('.menu-header');
const bodySc = document.querySelector('body');
const burgerMenu = document.querySelector('.burger-menu');
console.log(bodySc)

headerBurger.addEventListener('click', function() {
    headerBurger.classList.toggle('active');
    menuHeader.classList.toggle('active');
    burgerMenu.classList.toggle('active')
    bodySc.classList.toggle('lock');

});