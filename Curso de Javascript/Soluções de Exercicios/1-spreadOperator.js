const funcionario = {
    nome: 'João dos Anzóis',
    idade: 30,
    cargo: 'Programador',
    salario: 3000
}

const funcionario2 = {
    nome: 'João',
    idade: 15,
    cargo: 'Analista',
    salario: 2000
}

function clonarFuncionario(pessoa) {
    const funcionarioClonado = { ...pessoa, nome: 'Leo', idade: 35 }
    return funcionarioClonado;
}

function clonarFuncionarioComParametros(pessoa, novoNome, novaIdade) {
    const funcionarioClonado = { ...pessoa, nome: novoNome, idade: novaIdade }
    return funcionarioClonado;
}

clonarFuncionarioComParametros(funcionario, 'Leo', 30);
clonarFuncionarioComParametros(funcionario2,'Zé', 50)
