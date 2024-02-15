function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais, o que tornaria o CPF inválido
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Calcula e verifica o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador1 = (resto === 10 || resto === 11) ? 0 : resto;
    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Calcula e verifica o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digitoVerificador2 = (resto === 10 || resto === 11) ? 0 : resto;
    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
        return false;
    }

    // Se passar por todas as verificações, o CPF é válido
    return true;
}

// Exemplo de uso
const cpfValido = '123.456.789-09';
const cpfInvalido = '111.222.333-44';

console.log(validarCPF(cpfValido)); // true
console.log(validarCPF(cpfInvalido)); // false

function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        throw new Error('CPF deve conter 11 dígitos.');
    }

    // Verifica se todos os dígitos são iguais, o que tornaria o CPF inválido
    if (/^(\d)\1{10}$/.test(cpf)) {
        throw new Error('CPF inválido (todos os dígitos são iguais).');
    }

    // Calcula e verifica o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador1 = (resto === 10 || resto === 11) ? 0 : resto;
    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
        throw new Error('CPF inválido (primeiro dígito verificador não confere).');
    }

    // Calcula e verifica o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digitoVerificador2 = (resto === 10 || resto === 11) ? 0 : resto;
    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
        throw new Error('CPF inválido (segundo dígito verificador não confere).');
    }

    // Se passar por todas as verificações, o CPF é válido
}

// Exemplo de uso
try {
    validarCPF('123.456.789-09');
    console.log('CPF válido.');
} catch (error) {
    console.error(error.message);
}

function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        console.log('CPF inválido: deve conter 11 dígitos.');
        return;
    }

    // Verifica se todos os dígitos são iguais, o que tornaria o CPF inválido
    if (/^(\d)\1{10}$/.test(cpf)) {
        console.log('CPF inválido: todos os dígitos são iguais.');
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
        console.log('CPF inválido: primeiro dígito verificador não confere.');
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
        console.log('CPF inválido: segundo dígito verificador não confere.');
        return;
    }

    // Se passar por todas as verificações, o CPF é válido
    console.log('CPF válido.');
}

// Exemplo de uso
validarCPF('123.456.789-09');


    // 000.000.000-00
    const maskCPF = value => {
        return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1")
    }
    
    // (00) 00000-0000
    const maskPhone = value => {
        return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d{4})(\d)/, "$1-$2")
    }
    
    // 00000-000
    const maskCEP = value => {
        return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2")
    }
    
    // 00/00/0000
    const maskDate = value => {
        return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1")
    }
    
    // Aceita apenas que letras sejam digitadas
    const maskOnlyLetters = value => {
        return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "")
    }
    
    // Aceita apenas números
    const maskOnlyNumbers = value => {
        return value.replace(/\D/g, "")
    }