let valor = 20;

function somar() {

    valor = 20 + 30;
    console.log(valor)
    console.log("Estou na função");
}


somar()
console.log(valor);
console.log("Onde está a função")

function somarNumero(numero1, numero2){
    let somando = numero1 + numero2;
    return somando;

}


let somaTotal = somarNumero(5,8);

console.log(somaTotal);



function multiplicandoNumero(numero){

    return numero * 2;
}

let resultadoMultiplicacao = multiplicandoNumero(4);

console.log(resultadoMultiplicacao);



const quadrado = (valor) => valor * valor; 

// const somarValores = (numeroUm, numeroDois) =>{
//     return numeroUm + numeroDois;
// }

const somarValores = (numeroUm, numeroDois) => numeroUm + numeroDois;


Calback


document.getElementById('selecione').addEventListener('click', function(){
    // let paragrafo = document.getElementById('conteudo');

    // paragrafo.style.backgroundColor = 'red';

    conteudo.style.backgroundColor = 'red';
});


// ### Exercícios:

// 1. Crie uma função que retorne a soma de dois números.
// 2. Escreva uma Arrow Function que calcule a média de três valores.
// 3. Utilize uma função anônima para verificar se um número é par.
// 4. Escreva uma função que retorne os operadores aritimeticos no console.log

function soma (numeroUm, numeroDois) {
    return numeroUm + numeroDois;
}

const media = (a,b,c) => (a + b + c) / 3;

console.log(media(10, 20, 30));

let verificarPar = function(numero) {
    return numero % 2 === 0 ? 'par' : 'ímpar';
};

function operadoresAritimeticos () {

}







