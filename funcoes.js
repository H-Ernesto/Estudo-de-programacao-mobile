// Função que recebe parâmetros tipados e tem retorno tipado
function somar(a, b) {
    return a + b;
}
// Chamar a função com os tipos corretos
var resultado = somar(10, 5);
console.log("Resultado da soma: ".concat(resultado));
// Exemplo de erro de tipagem:
// somar("10", 5); // Erro de compilação! "Argument of type 'string' is not assignable to parameter of type 'number'."
