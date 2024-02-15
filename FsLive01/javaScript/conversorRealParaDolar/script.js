let real = document.getElementById("real");
let botao = document.getElementById("botao");
let dolar = "";
let resultado = document.getElementById("resultado");
const taxaDeCambio = 0.20;

botao.addEventListener("click", converter);

function converter() {
    dolar = (real.value * taxaDeCambio)
    resultado.innerHTML = `
    <p>$${dolar.toFixed(2)}</p>
    `
}