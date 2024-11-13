const hamBurgerContainer = document.querySelector('#header__main-nav')
const hamBurger = document.querySelector('.header__main-nav--hamburger')
const links = document.querySelectorAll('.header__main-nav--links li')

hamBurger.addEventListener('click', () => {
    hamBurgerContainer.classList.toggle('clicked')
    links.forEach((link) => {
        link.classList.toggle('fade')
    })
})