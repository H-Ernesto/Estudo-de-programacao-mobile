let n1 = 10;
let n2 = 5;
let operador = "/";

let resultado;

if (operador === "+") {
    resultado = n1 + n2;
} else if (operador === "-") {
    resultado = n1 - n2;
} else if (operador === "*") {
    resultado = n1 * n2;
} else if (operador === "/") {  
    if (n1 != 0 || n2 != 0) {
        resultado = n1 / n2;
    } else {
        console.log("tu e dhodho é? hm Nan"); 
    }
} else {
    resultado = "Operador inválido!";
}

console.log("Resultado:", resultado);
