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

function clonarFuncionario(pesssoa) {
    const funcionarioClonado = { ...pesssoa, nome: 'Leo', idade: 35 }
    console.log("Novo funcionário: " + funcionarioClonado);
}

function clonarFuncionarioComParametros(pesssoa, novoNome, novaIdade) {
    const funcionarioClonado = { ...pesssoa, nome: novoNome, idade: novaIdade }
    console.log("Novo funcionário: " + funcionarioClonado);
}

clonarFuncionarioComParametros(funcionario, 'Leo', 30);
clonarFuncionarioComParametros(funcionario2,'Zé', 50)
