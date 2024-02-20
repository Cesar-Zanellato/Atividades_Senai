import java.util.Scanner;

public class Vereificacao {
    public static void main(String[] args) throws Exception {
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite um número inteiro: ");
        int numero = scan.nextInt();
        
        boolean verificacaoPositivo = numero > 0;
        boolean verificacaoPar = numero % 2 == 0;

        System.out.printf("O número: %d \nO número é par? %b \nO número é positivo? %b", numero, verificacaoPar, verificacaoPositivo);
        scan.close();
    }
}
