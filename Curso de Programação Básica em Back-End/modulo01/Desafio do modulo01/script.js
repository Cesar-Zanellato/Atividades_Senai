function calcularValores(){
    let valor1 = parseFloat(document.getElementById("textValor1").value);
    let valor2 = parseFloat(document.getElementById("textValor2").value);
    let operacao = document.getElementById("cbxOperacao").value;

    let resultado;

    switch(operacao){
        case "+":
            resultado = valor1 + valor2;
            break
        case "-":
            resultado = valor1 - valor2;
            break        
        case "*":
            resultado = valor1 * valor2;
            break
        case "/":
            resultado = valor1 / valor2;
            break
        default:
            alert("Digite um número válido nos campos!");
    };

    document.getElementById("textResultado").innerHTML = resultado;
}