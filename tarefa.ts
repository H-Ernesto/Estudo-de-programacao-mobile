interface User {
    nome: string;
    email: string;
    idade: number;
    status: boolean;
}

let listaDeUsuarios: User[] = [];

function cadastrarUsuario(user: User): void {
    listaDeUsuarios.push(user);
}

function listarUsuarios(): void {
    console.log("\nLISTA DE USUÁRIOS:");
    listaDeUsuarios.forEach((user, index) => {
        console.log(`Usuário ${index + 1}:`);
        console.log(`Nome: ${user.nome}`);
        console.log(`Email: ${user.email}`);
        console.log(`Idade: ${user.idade}`);
        console.log(`Status: ${user.status ? "Ativo" : "Inativo"}`);
    });
}

cadastrarUsuario({ nome: "Ozzy Osbourne", email: "osbournozzy666@hotmail.com", idade: 76, status: false });
cadastrarUsuario({ nome: "Giulia Lima Souza", email: "gatinhalima@gmail.com", idade: 23, status: true });
cadastrarUsuario({ nome: "Maria Bonita", email: "princesadosertaomb12@outlook.com", idade: 27, status: false });
cadastrarUsuario({ nome: "Martin Scorsese", email: "martinscorsese1942@hotmail.com", idade: 82, status: true });

listarUsuarios();
