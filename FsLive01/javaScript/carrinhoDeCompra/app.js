let btnSoma = document.getElementById('btnSoma');
let btnDiminui = document.getElementById('btnDiminui');
let quantidade = document.getElementById('quantidade');
let preco = document.getElementById('preco');
let total = document.getElementById('total');
let resultadoTotal = document.getElementById('atualizaTotal');

btnSoma.addEventListener('click',() => {
    soma();
    atualizaTotal();
});

btnDiminui.addEventListener('click',() => {
    diminui();
    atualizaTotal();
});

quantidade.addEventListener('blur',() => {
    atualizaTotal();
});

function diminui() {
    if (quantidade.value > 1) {
        quantidade.value = +quantidade.value - 1;
    }
}

function soma() {
    quantidade.value = +quantidade.value + 1;
}

function atualizaTotal() {
    let total = parseFloat(preco.textContent.substring(3,8)) * quantidade.value;
    console.log(preco);
    resultadoTotal.innerHTML = `R$ ${total.toFixed(2)}`;
}

atualizaTotal();
