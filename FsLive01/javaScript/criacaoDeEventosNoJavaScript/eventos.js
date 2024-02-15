let div = document.getElementById("area");

div.addEventListener('click', clicou);
div.addEventListener('mouseenter', entrou);
div.addEventListener('mouseout', saiu);

function entrou() {
    div.innerText = "Entrou";
    div.style.color = "black";
    div.style.background = "yellow";
}

function saiu() {
    div.innerText = "Saiu";
    div.style.color = "white";
    div.style.background = "green";
}

function clicou() {
    div.innerText = "Clicou";
    div.style.color = "white";
    div.style.background = "red";
}