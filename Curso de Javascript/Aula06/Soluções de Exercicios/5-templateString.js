function detalharFuncionario(funcionario) {
    console.log(`${funcionario.nome} atua no cargo de ${funcionario.cargo} e recebe um salário de R$ ${funcionario.salario}`);
}

function detalharFuncionarioComDestructuring(funcionario) {
    const {nome, cargo, salario} = funcionario;
    console.log(`${nome} atua no cargo de ${cargo} e recebe um salário de R$ ${salario}`);
}

const funcionario = {
    nome: 'João dos Anzóis',
    idade: 30,
    cargo: 'Programador',
    salario: 3000
}

detalharFuncionario(funcionario);
detalharFuncionarioComDestructuring(funcionario);