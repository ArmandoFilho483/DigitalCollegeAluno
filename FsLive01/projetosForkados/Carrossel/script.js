let cards = [
    {
      id: 1,      
      nome: "Refrigerante",
      descricao: "Descrição do refrigerante",
      imagem: "img/fogao_embutido.webp"
    },
    {
      id: 2,
      nome: "Pizza",
      descricao: "Descrição da pizza",
      imagem: "img/fogao_embutido.webp"
    },
    {
      id: 3,
      nome: "Smartphone",
      descricao: "Descrição do smartphone",
      imagem: "img/fogao_embutido.webp"
    },
    {
        id: 4,
        nome: "Cerveja",
        descricao: "Descrição da cerveja",
        imagem: "img/fogao_embutido.webp"
    },
    {
        id: 5,
        nome: "Chocolate",
        descricao: "Descrição do chocolate",
        imagem: "img/fogao_embutido.webp"
      },
      {
        id: 6,
        nome: "Laptop",
        descricao: "Descrição do laptop",
        imagem: "img/fogao_embutido.webp"
      },
      {
        id: 7,
        nome: "Café",
        descricao: "Descrição do café",
        imagem: "img/fogao_embutido.webp"
      },
      {
        id: 8,
        tipo: "Alimento",
        descricao: "Descrição do hambúrguer",
        imagem: "img/fogao_embutido.webp"
      },
      {
        id: 9,
        nome: "Fones de Ouvido",
        descricao: "Descrição dos fones de ouvido",
        imagem: "img/fogao_embutido.webp"
      },
      {
        id: 10,
        nome: "Chá",
        descricao: "Descrição do chá",
        imagem: "img/fogao_embutido.webp"
      }
];

let produtos = document.getElementById("grupo_cards")

for (let i=0; i <= cards.length; i++) {
    produtos.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${cards[i].imagem}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${cards[i].nome}</h5>
      <p class="card-text">${cards[i].descricao}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    `
}