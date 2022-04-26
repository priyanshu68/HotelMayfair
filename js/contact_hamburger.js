$(function() {
    const hamburger = document.getElementById("hamburger1 ");
    const navUl = document.getElementById("nav-ul1 ");
    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('show');
    })
})