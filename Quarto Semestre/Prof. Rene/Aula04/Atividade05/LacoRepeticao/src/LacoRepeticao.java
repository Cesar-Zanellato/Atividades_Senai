import java.util.Scanner;

public class LacoRepeticao {
    public static void main(String[] args) throws Exception {
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite o numero que deseja saber a tabuada: ");
        int numero = scan.nextInt();

        for(int i = 0; i <= 10; i++){
            int tabuada = numero * i;
            System.out.printf("O número %d vezes o número %d é: %d \n", numero, i, tabuada);
        }

        scan.close();
    }
}