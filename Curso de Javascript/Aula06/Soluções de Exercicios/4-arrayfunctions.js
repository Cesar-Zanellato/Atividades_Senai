const clonarFuncionario = pesssoa => {
    const funcionarioClonado = { ...pesssoa, nome: 'Leo', idade: 35 }
    console.log("Novo funcionário: " + funcionarioClonado);
}

const clonarFuncionarioComParametros = (pesssoa, novoNome, novaIdade) => {
    const funcionarioClonado = { ...pesssoa, nome: novoNome, idade: novaIdade }
    console.log("Novo funcionário: " + funcionarioClonado);
}

const calcularValores = (operacao, ...numeros) => {
    let total = numeros[0];
    for (i = 1;i<numeros.length;i++) {
        if (operacao === 'soma') {
            total += numeros[i];
            continue;
        }
        if (operacao === 'multiplicacao') {
            total *= numeros[i];
            continue;
        }
    }

    return total;
}

const imprimirFuncionario = funcionario => {
    const {nome, cargo, salario} = funcionario;
    console.log("Nome: " + nome);
    console.log("Cargo: ".concat(cargo));
    console.log(`Salário: ${salario}`);
}

const detalharFuncionario = funcionario => console.log(`${funcionario.nome} atua no cargo de ${funcionario.cargo} e recebe um salário de R$ ${funcionario.salario}`);

const detalharFuncionarioComDestructuring = funcionario => {
    const {nome, cargo, salario} = funcionario;
    console.log(`${nome} atua no cargo de ${cargo} e recebe um salário de R$ ${salario}`);
}