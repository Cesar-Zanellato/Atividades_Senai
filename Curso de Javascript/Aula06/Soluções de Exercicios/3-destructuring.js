function imprimirFuncionario(funcionario) {
    const {nome, cargo, salario} = funcionario;
    console.log("Nome: " + nome);
    console.log("Cargo: ".concat(cargo));
    console.log(`Salário: ${salario}`);
}

const funcionario = {
    nome: 'João dos Anzóis',
    idade: 30,
    cargo: 'Programador',
    salario: 3000
}

imprimirFuncionario(funcionario);