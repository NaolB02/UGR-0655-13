const specialMenu = document.querySelector('.specialDisplay');
const specialClose = document.querySelector('.special__close');
const special = document.querySelector('.special');

specialMenu.addEventListener('click', () => {
    special.classList.add('special--open')
})

specialClose.addEventListener('click', () => {
    special.classList.remove('special--open')
})