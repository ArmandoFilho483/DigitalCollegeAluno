
let cpf = '12345678910';

let nove = cpf.slice(0, 9);
let digitos = cpf.slice(-2);

let digito1 = 0;
let digito2 = 0;

let noveItems = nove.split('').reverse();
let multiplicador = 1;

let soma1 = noveItems.reduce(function(resultado, item) {
    multiplicador++;
    return resultado + (item * multiplicador);
}, 0)

let resto1 = soma1 % 11;

if(resto1 < 2) {
    digito1 = 0;
} else {
    digito1 = 11 - resto1;
}

let dez = nove.toString().concat(digito1);

let dezItems = dez.split('').reverse();
multiplicador = 1;

let soma2 = dezItems.reduce(function(resultado, item) {
    multiplicador++;
    return resultado + (item * multiplicador);
}, 0)

let resto2 = soma2 % 11;

if(resto2 < 2) {
    digito2 = 0;
} else {
    digito2 = 11 - resto2;
}

let digitosResultado = digito1.toString().concat(digito2)
console.log(digitos === digitosResultado);