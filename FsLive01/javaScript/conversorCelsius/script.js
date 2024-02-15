let valor = document.getElementById("valor");
let convert = document.getElementById("convert");
let resultado = document.getElementById("resultado")

convert.addEventListener('click', calcular)

function calcular() {
    resultado.innerHTML = `
    <table>
    <tr>
    <th>O resultado da conversão é</th>
    </tr>
    <tr>
        <td>
        ${parseFloat((valor.value * 1.8) + 32) + " Fhº"}
        </td>
    </tr>
    </table>
    `;
}
