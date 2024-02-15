// Função para validar CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remover caracteres não numéricos

    // Verificar se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Calcular os dígitos verificadores
    for (let j = 0; j < 2; j++) {
        let soma = 0;
        for (let i = 0; i < 9 + j; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 + j - i);
        }
        let resto = soma % 11;
        let digito = resto < 2 ? 0 : 11 - resto;

        if (digito !== parseInt(cpf.charAt(9 + j))) {
            return false;
        }
    }

    // Se todas as verificações passaram, o CPF é válido
    return true;
}

// Obter referências para os elementos HTML
const ncpf = document.getElementById('ncpf');
const resultado_validacao = document.getElementById('resultado_validacao');
const botao = document.getElementById('botao');

// Adicionar um event listener para o botão
botao.addEventListener('click', function () {
    const cpfDigitado = ncpf.value;
    const cpfValido = validarCPF(cpfDigitado);

    // Atualizar o resultado de validação na página HTML
    resultado_validacao.innerHTML = cpfValido ? 'CPF válido' : 'CPF inválido';
});
