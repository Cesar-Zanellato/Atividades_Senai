import java.util.Scanner;

public class Triangulo {
    public static void main(String[] args) throws Exception {
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite o primeiro lado do triângulo: ");
        int ladoUm = scan.nextInt();

        System.out.println("Digite o segundo lado do triângulo: ");
        int ladoDois = scan.nextInt();

        System.out.println("Digite o treceiro lado do triângulo: ");
        int ladoTres = scan.nextInt();
        
        if (ladoUm + ladoDois > ladoTres && ladoUm + ladoTres > ladoDois && ladoTres + ladoDois > ladoUm) {
            System.out.println("É possivel criar um triângulo");
        } else { 
            System.out.println("Não é possivel criar um triângulo");
        }

        scan.close();
    }
}