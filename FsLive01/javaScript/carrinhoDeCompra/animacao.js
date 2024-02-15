let inputTitular = document.getElementById('input-titular');
let cartaoTitular = document.getElementById('cartao-titular');
let inputCvv = document.getElementById('input-cvv');
let 

// inputTitular.addEventListener('keyup', escreveNomeTitular);

function escreveNomeTitular () {
    cartaoTitular = inputTitular.value.toUpperCase();
};

// inputCvv.addEventListener('focus', () => {
//     verso.style.display = 'block';
//     frente.style.display = 'none';
//     verso.classList.add('animate_flipInY');
// };

// inputCvv.addEventListener('blur', () => {
//     mostraVerso.style.display = 'none';
//     mostraFrente.style.display = 'block';
//     mostraVerso.classList.add('animate_flipInY');
// };