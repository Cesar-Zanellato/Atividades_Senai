const clonarFuncionario = pessoa => {
    return { ...pessoa, nome: 'Leo', idade: 35 }
}

const clonarFuncionarioComRetornoSemBloco = pessoa => ({ ...pessoa, nome: 'Leo', idade: 35 })

const clonarFuncionarioComParametros = (pessoa, novoNome, novaIdade) => {
    const funcionarioClonado = { ...pessoa, nome: novoNome, idade: novaIdade }
    return funcionarioClonado;
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