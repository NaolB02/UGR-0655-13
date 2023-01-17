const hamMenu = document.querySelector('.header__nav__hamburger');
const close = document.querySelector('.header__nav__list__close');
const nav = document.querySelector('.header__nav__list');

hamMenu.addEventListener('click', () => {
    nav.classList.add('header__nav__list--open')
})

close.addEventListener('click', () => {
    nav.classList.remove('header__nav__list--open')
})