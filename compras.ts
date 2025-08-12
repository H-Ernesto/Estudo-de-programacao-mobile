// 1. Definindo a interface para um item de compra
interface Item {
  nome: string;
  preco: number;
}

// 2. Criando uma função que recebe um array de Items
function calcularTotal(itens: Item[]): number {
  let total = 0;
  for (const item of itens) {
    total += item.preco;
  }
  return total;
}

// 3. Criando um array de itens de exemplo
const carrinho: Item[] = [
  { nome: "Notebook", preco: 2500 },
  { nome: "Mouse", preco: 150 },
  { nome: "Teclado", preco: 300 }
];

// 4. Chamando a função e exibindo o resultado
const valorTotal: number = calcularTotal(carrinho);
console.log(`O valor total do carrinho é R$ ${valorTotal}`);

// Exemplo de erro:
// const itemInvalido = { nome: "Cadeira", preco: "500" };
// carrinho.push(itemInvalido); // Erro de compilação! A propriedade 'preco' está com o tipo errado.