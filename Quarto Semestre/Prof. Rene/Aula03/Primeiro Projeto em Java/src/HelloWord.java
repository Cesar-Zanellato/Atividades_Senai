import java.util.Scanner;

public class HelloWord {
    
    public static void main(String[] args) {
        // Mostrando onde o sistema ira pegar os dados "System.in" == Teclado
        Scanner scan = new Scanner(System.in);
        
        // Pedindo para o usuario digitar seu nome
        System.out.println("Digite seu nome: ");
        String nome = scan.nextLine();

        // Mostrando no terminal a frase pronta e a variavel digitada pelo usuario
        System.out.printf("Olá %s", nome);

        // Fechando o Scanner
        scan.close();
    }    
}