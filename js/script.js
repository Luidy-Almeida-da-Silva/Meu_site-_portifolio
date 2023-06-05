const menu = document.querySelector('.menu');
const navmenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navmenu.classList.toggle('ativo');
})
 function loading(){
    document.getElementsByClassName("box-load")[0].style.display = "none"
    document.getElementsByClassName("content")[0].style.display = "block"
 }