import java.util.Scanner;

public class FormatacaoTexto {
    public static void main(String[] args) throws Exception {
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite um numero");
        int numero = scan.nextInt();

        System.out.printf("Numero inteiro: %d \nNumero em hexadecimal: %x \nNumero em octal: %o \nNumero em caractere: %c" , numero, numero, numero, numero);

        scan.close();
    }
}
