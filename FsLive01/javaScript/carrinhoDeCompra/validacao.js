// VARIÁVEIS
let inputNumero = document.getElementById('input-numero');
let selectMes = document.getElementById('selectMes');
let inputCpf = document.getElementById('inputCpf');
const selecaoDeAnos = document.getElementById('selecaoDeAnos');
let numeroCvv = document.getElementById('numeroCvv')
// CONSTANTE QUE CHAMA A DATA ATUAL DO SISTEMA.
const currentDate = new Date();
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
for (let i = 0; i <= 11; i++) {
    selectMes.innerHTML += `<option>${meses[i]}</option>`;
};
// ESSE MÉTODO GETFULLYEAR É USADO PARA TIRAR DA DATA APENAS O ANO.
const currentYear = currentDate.getFullYear();
for (let i = currentYear; i <= (currentYear + 11); i++) {
    let anoCorrente = [];
    anoCorrente.push(i);
    selecaoDeAnos.innerHTML += `<option>${anoCorrente[0]}</option>`;
};

inputCpf.addEventListener('blur', () => {
    let cpf = inputCpf.value.replace(/[^\d]/g, '');
    // Verifica se o CPF tem 11 dígitos
    if (true) {
        if (cpf.length != 11) {
            inputCpf.classList.add('is-invalid');
            return;
        }
        // Verifica se todos os dígitos são iguais, o que tornaria o CPF inválido
        if (/^(\d)\1{10}$/.test(cpf)) {
            inputCpf.classList.add('is-invalid');
            return;
        }
        // Calcula e verifica o primeiro dígito verificador
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = 11 - (soma % 11);
        let digitoVerificador1 = (resto === 10 || resto === 11) ? 0 : resto;
        if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
            inputCpf.classList.add('is-invalid');
            return;
        }
        // Calcula e verifica o segundo dígito verificador
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = 11 - (soma % 11);
        let digitoVerificador2 = (resto === 10 || resto === 11) ? 0 : resto;
        if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
            inputCpf.classList.add('is-invalid');
            return;
        }
    } return inputCpf.classList.remove('is-invalid');
});

numeroCvv.addEventListener ('blur', () => {
    let cvv = numeroCvv.value;
    // Verifica se o CVV tem exatamente 3 ou 4 dígitos e não aceita caracteres especiais
    if (/^\d{3,4}$/.test(cvv)) {
        // CVV válido
        numeroCvv.classList.remove('is-invalid');
    } else {
        // CVV inválido
        numeroCvv.classList.add('is-invalid');
    };
});
