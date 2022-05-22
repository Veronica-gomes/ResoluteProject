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


