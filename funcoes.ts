// Função que recebe parâmetros tipados e tem retorno tipado
function somar(a: number, b: number): number {
  return a + b;
}

// Chamar a função com os tipos corretos
let resultado: number = somar(10, 5);
console.log(`Resultado da soma: ${resultado}`);

// Exemplo de erro de tipagem:
// somar("10", 5); // Erro de compilação! "Argument of type 'string' is not assignable to parameter of type 'number'."