const headerTop = document.querySelector('.header-top')
const scrollTop = document.querySelector('.scrollTop')
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 1 || window.scrollY > 1) {
        headerTop.style.background = "rgba(20, 20, 20, 0.541)"

    } else {
        headerTop.style.background = "transparent"

    }

    if (window.scrollY > 55) {
        scrollTop.style.display = 'block'
        scrollTop.style.opacity = '1'
    } else {
        scrollTop.style.display = 'none'
    }
})

scrollTop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})