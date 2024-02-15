let botaoLigaEDesliga = document.getElementById('botaoLigaEDesliga');
let modoDaPagina = document.getElementById('mode_page');
let imagemSolELua = document.getElementById('imagem-solELua');

botaoLigaEDesliga.addEventListener('click', alternar);

function alternar () {
    if (modoDaPagina.getAttribute('href') === 'style.css') {
        modoDaPagina.href = 'style-dark.css';
        imagemSolELua.src = 'img/sun.png';
        localStorage.setItem('modoEscuro', 'true');
    } else {
        modoDaPagina.href = 'style.css';
        imagemSolELua.src = 'img/moon.png';
        localStorage.setItem('modoEscuro', 'false');
    }
    console.log(localStorage.getItem('modoEscuro'))
    console.log(localStorage.getItem('modoEscuro') === 'true');
}

function modoEscuro () {
    if (localStorage.getItem('modoEscuro') === 'true') {
        modoDaPagina.href = 'style-dark.css';
        imagemSolELua.src = 'img/sun.png';
    }
};

modoEscuro();