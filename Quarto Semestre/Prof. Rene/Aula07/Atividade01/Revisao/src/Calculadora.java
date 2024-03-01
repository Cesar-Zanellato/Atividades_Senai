import java.util.NoSuchElementException;
import java.util.Scanner;

public class Calculadora {
    
    public void calculadora(){

        Scanner scan = new Scanner(System.in);
        int resultado;

        try {

            System.out.println("Digite o tipo da operação que deseja fazer: ");
            String tipoOperacao = scan.nextLine();

            System.out.println("Digite o primeiro número da operação: ");
            int numeroUm = scan.nextInt();
            
            System.out.println("Digite o segundo número da operação: ");
            int numeroDois = scan.nextInt();

            switch (tipoOperacao) {
                case "+":
                    resultado = numeroUm + numeroDois;
                    System.out.printf("O resultado da operação foi: %d\n", resultado);
                    break;
    
                case "-":
                    resultado = numeroUm - numeroDois;
                    System.out.printf("O resultado da operação foi: %d\n", resultado);
                    break;
    
                case "*":
                    resultado = numeroUm * numeroDois;
                    System.out.printf("O resultado da operação foi: %d\n", resultado);
                    break;
    
                case "/":
                    resultado = numeroUm / numeroDois;
                    System.out.printf("O resultado da operação foi: %d\n", resultado);
                    break;
    
                case "%":
                    resultado = numeroUm % numeroDois;
                    System.out.printf("O resultado da operação foi: %d\n", resultado);
                    break;
            
                default:
                    System.out.println("Digite uma operação valida");
                    break;
            }
        } catch (NoSuchElementException ex) {
            System.out.println("Digite uma operação válida");
        }

        scan.close();
    }
}
