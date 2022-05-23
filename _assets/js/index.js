/* ---- Marcador de página navbar ---- */
const currentLocation = location.href;
const navItems = document.querySelectorAll('a');
const navLenght = navItems.length;

for(let i = 0; i < navLenght; i++){
    if(navItems[i].href === currentLocation){
        navItems[i].className = 'active';
    }
} 


/* ---- Introdução negocio ---- */
const divPrincipios = document.querySelector('.principios');
const divValores = document.querySelector('.valores');
const divMissoes = document.querySelector('.missoes');

/*
divPrincipios.addEventListener("click", handleText('principios'));
divValores.addEventListener("click", handleText('valores'));
divMissoes.addEventListener("click", handleText('missoes')); 
*/


divPrincipios.addEventListener("click", () =>{
    let principiosTitulo = document.querySelector('.principios h3');
    let principiosText = document.querySelectorAll('.principios p');
    let principiosBorder = document.querySelector('.principios .linha-vert');

    principiosTitulo.classList.toggle('titutloActive');
    principiosBorder.classList.toggle('borderActive');
    for(let i = 0; i < principiosText.length; i++){
        principiosText[i].classList.toggle('textoActive');
    } 
});

divValores.addEventListener("click", () =>{
    let valoresTitulo = document.querySelector('.valores h3');
    let valoresText = document.querySelectorAll('.valores p');
    let valoresBorder = document.querySelector('.valores .linha-vert');

    valoresTitulo.classList.toggle('titutloActive');
    valoresBorder.classList.toggle('borderActive');
    for(let i = 0; i < valoresText.length; i++){
        valoresText[i].classList.toggle('textoActive');
    }
});

divMissoes.addEventListener("click", () =>{
    let missoesTitulo = document.querySelector('.missoes h3');
    let missoesText = document.querySelectorAll('.missoes p');
    let missoesBorder = document.querySelector('.missoes .linha-vert');

    missoesTitulo.classList.toggle('titutloActive');
    missoesBorder.classList.toggle('borderActive');
    for(let i = 0; i < missoesText.length; i++){
        missoesText[i].classList.toggle('textoActive');
    }

})


/*handleText('principios')

function handleText(introDiv){
    let titulo = document.querySelector(`.${introDiv} h3`);
    let texto = document.querySelectorAll(`.${introDiv} p`);
    let border = document.querySelector(`.${introDiv} .linha-vert`);

    console.log(titulo, texto, border);
   
    
    titulo.classList.toggle('titutoActive');
    border.classList.toggle('borderActive');
    
    for(let i = 0; i < texto.length; i++){
        texto[i].classList.toggle('textoActive');
    } 
     
}  */


/* --- Efeito frase intro --- */




/* --- Animação intro --- */
const informacoesIntro = document.querySelectorAll('[data-anime]');

window.addEventListener('scroll', () =>{

    const alturaPage = window.pageYOffset + ((window.innerHeight * 3) / 4);

    informacoesIntro.forEach((element) =>{
        if(alturaPage > element.offsetTop){
            element.classList.add('animacao')
        }
    })
})


/* --- menu mobile hamburguer--- */ 
const menuBtn = document.querySelector('.btn_mobile');

function handleMenu(){
    const listaMenu = document.querySelector('.lista');
    listaMenu.classList.toggle('menuActive');
    menuBtn.classList.toggle('btn_mobileActive'); 
}

menuBtn.addEventListener("click", handleMenu);
window.addEventListener("scroll", () =>{
    const listaMenu = document.querySelector('.lista');
    listaMenu.classList.remove('menuActive');
    menuBtn.classList.remove('btn_mobileActive'); 
})  

/* --- Menu mobile inferior --- */ 











/* --- Modelo de negocio mobile --- */ 

const principiosMobile = document.querySelector('.principiosMobile');
const valoresMobile = document.querySelector('.valoresMobile');
const missoesMobile = document.querySelector('.missoesMobile');
const circulos3 = document.querySelectorAll('[data-circ3]');
const circulos2 = document.querySelectorAll('[data-circ2]');

let principiosTexto = document.querySelector('.texto_principios');
let valoresTexto = document.querySelector('.texto_valores');
let missoesTexto = document.querySelector('.texto_missoes');

principiosMobile.addEventListener("click", () =>{
    principiosTexto.classList.toggle('handleText');
    valoresTexto.classList.remove('handleText');
    missoesTexto.classList.remove('handleText');
    
    for(let i = 0; i < circulos3.length; i++){
        if(i === 0) {
            circulos3[i].classList.toggle('modeloAtivo');
        }else {
            circulos3[i].classList.remove('modeloAtivo');
        }  
    }

    for(let i = 0; i < circulos2.length; i++){
        if(i === 0){
            circulos2[i].classList.toggle('modeloAtivo');
        }else {
            circulos2[i].classList.remove('modeloAtivo');
        }
    }
    
    
});

valoresMobile.addEventListener("click", () =>{
    valoresTexto.classList.toggle('handleText');
    principiosTexto.classList.remove('handleText');
    missoesTexto.classList.remove('handleText');

    for(let i = 0; i < circulos3.length; i++){
        if(i === 1){
            circulos3[i].classList.toggle('modeloAtivo');
        }else {
            circulos3[i].classList.remove('modeloAtivo');
        }
    }

    for(let i = 0; i < circulos2.length; i++){
        if(i === 1){
            circulos2[i].classList.toggle('modeloAtivo');
        }else {
            circulos2[i].classList.remove('modeloAtivo');
        }
    }
});

missoesMobile.addEventListener("click", () =>{
    missoesTexto.classList.toggle('handleText');
    valoresTexto.classList.remove('handleText');
    principiosTexto.classList.remove('handleText');

    for(let i = 0; i < circulos3.length; i++){
        if(i === 2){
            circulos3[i].classList.toggle('modeloAtivo')
        }else {
            circulos3[i].classList.remove('modeloAtivo');
        } 
    }

    for(let i = 0; i < circulos2.length; i++){
        if(i === 2){
            circulos2[i].classList.toggle('modeloAtivo');
        }else {
            circulos2[i].classList.remove('modeloAtivo');
        }
    }
});

window.addEventListener("load", () =>{
    principiosTexto.classList.toggle('handleText');
    circulos3[0].classList.toggle('modeloAtivo');
    circulos2[0].classList.toggle('modeloAtivo');
})








