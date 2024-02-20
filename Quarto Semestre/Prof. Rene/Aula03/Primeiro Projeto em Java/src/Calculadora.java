import java.util.Scanner;

public class Calculadora {
    
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite o primeiro valor da soma: ");
        Float a = scan.nextFloat();
        
        
        System.out.println("Digite o segundo valor da soma: ");
        Float b = scan.nextFloat();

        float soma = a + b;
        int c = 0;

        boolean maior = (a > b) && (b > c);

        System.out.printf("a + b = %.2f", soma);
        System.out.println(maior);

        scan.close();
    }
}
