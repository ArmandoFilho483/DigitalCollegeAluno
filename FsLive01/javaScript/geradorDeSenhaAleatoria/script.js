let gerar_senha = document.getElementById("gerar_senha")
let resultado_senha = document.getElementById("resultado_senha")
let digitos = document.getElementById("digitos")

gerar_senha.addEventListener('click', gerarSenha);

function gerarSenha() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let tamanhoSenha = document.getElementById("digitos");

    let senha = "";

    for (let i = 0; i < tamanhoSenha.value; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    resultado_senha.innerHTML = `
        <p id="senha">${senha}</p>
    `;
}
