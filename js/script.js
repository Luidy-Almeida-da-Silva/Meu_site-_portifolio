const menu = document.querySelector('.menu');
const navmenu = document.querySelector('.nav-menu');
const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const cima = document.querySelector('.fa-regular');
let timer;

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navmenu.classList.toggle('ativo');
})

 function loading(){
    document.getElementsByClassName("box-load")[0].style.display = "none"
    document.getElementsByClassName("content")[0].style.display = "block"
}

item1.addEventListener('click', () =>{
    menu.classList.remove('ativo')
    document.querySelector('.nav-menu').classList.remove('ativo')
})

item2.addEventListener('click', () =>{
    menu.classList.remove('ativo')
    document.querySelector('.nav-menu').classList.remove('ativo')
})

item3.addEventListener('click', () =>{
    menu.classList.remove('ativo')
    document.querySelector('.nav-menu').classList.remove('ativo')
})

function exibirBotão() {
    cima.classList.add('visivel');
    clearTimeout(timer);
    timer = setTimeout(() => {
      cima.classList.remove('visivel');
    }, 2000);
}

window.addEventListener('scroll', () =>{
    exibirBotão()
    menu.classList.remove('ativo')
    document.querySelector('.nav-menu').classList.remove('ativo')
})