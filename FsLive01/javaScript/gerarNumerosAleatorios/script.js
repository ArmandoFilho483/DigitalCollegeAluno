let botao = document.getElementById("gerar")
let resultado_gerar = document.getElementById("resultado_gerar")

gerar.addEventListener('click', gerar1)

function gerar1() {
    resultado_gerar.innerHTML = `
        ${resultado_gerar.value = Math.floor((Math.random() * (10, 99) + 1))}
    `;
    resultado_gerar.classList.add('animate_animated')
    resultado_gerar.classList.add('animate__wobble')
    
    setTimeout(() => {
        resultado_gerar.classList.remove('animate_animated')
        resultado_gerar.classList.remove('animate__wobble')
    }, 500)

}