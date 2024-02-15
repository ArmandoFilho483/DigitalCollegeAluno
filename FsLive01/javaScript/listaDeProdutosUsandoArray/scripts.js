let biritas = [
    {
      id: 1,
      nome: "Tequila",
      preco: 74.97
    },
    {
      id: 2,
      nome: "Cachaça",
      preco: 19.99
    },
    // Adicionando mais 8 exemplos abaixo
    {
      id: 3,
      nome: "Vodka",
      preco: 35.50
    },
    {
      id: 4,
      nome: "Rum",
      preco: 55.00
    },
    {
      id: 5,
      nome: "Gin",
      preco: 40.00
    },
    {
      id: 6,
      nome: "Whisky",
      preco: 99.00
    },
    {
      id: 7,
      nome: "Absinto",
      preco: 75.00
    },
    {
      id: 8,
      nome: "Licor",
      preco: 30.00
    },
    {
      id: 9,
      nome: "Conhaque",
      preco: 70.00
    },
    {
      id: 10,
      nome: "Vermute",
      preco: 45.00
    }
  ];

let document.getElementById("tabela");

for (let i = 0;i <= biritas.length; i++) {
    tabela.innerHTML += `
    <tr>
        <td>${biritas[i].id}</td>
        <td>${biritas[i].nome}</td>
        <td>${biritas[i].preco}</td>
    </tr>
    `
}