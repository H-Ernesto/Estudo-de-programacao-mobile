// 2. Criando uma função que recebe um array de Items
function calcularTotal(itens) {
    var total = 0;
    for (var _i = 0, itens_1 = itens; _i < itens_1.length; _i++) {
        var item = itens_1[_i];
        total += item.preco;
    }
    return total;
}
// 3. Criando um array de itens de exemplo
var carrinho = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 150 },
    { nome: "Teclado", preco: 300 }
];
// 4. Chamando a função e exibindo o resultado
var valorTotal = calcularTotal(carrinho);
console.log("O valor total do carrinho \u00E9 R$ ".concat(valorTotal));
// Exemplo de erro:
// const itemInvalido = { nome: "Cadeira", preco: "500" };
// carrinho.push(itemInvalido); // Erro de compilação! A propriedade 'preco' está com o tipo errado.
