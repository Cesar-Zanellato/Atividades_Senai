function calcularValores(operacao, ...numeros) {
    //let total = operacao === 'soma' ? 0 : 1;
    //for (i = 0;i<numeros.length;i++) {
    console.log(numeros);
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

calcularValores('soma', 10, 50, 70, 90, 150);
calcularValores('multiplicacao', 10, 50, 70, 90, 150, 52, 63, 98);