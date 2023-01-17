const newsMenu = document.querySelector('.newsDisplay');
const newsClose = document.querySelector('.news__close');
const news = document.querySelector('.news');

newsMenu.addEventListener('click', () => {
    news.classList.add('news--open')
})

newsClose.addEventListener('click', () => {
    news.classList.remove('news--open')
})