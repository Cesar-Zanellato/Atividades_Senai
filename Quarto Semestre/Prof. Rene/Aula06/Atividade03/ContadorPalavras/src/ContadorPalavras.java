import java.util.Scanner;

public class ContadorPalavras {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String texto = scan.nextLine();
        texto = texto.trim();

        String[] listaPalavras = texto.split(" ");
        
        for(String palavra: listaPalavras){
            System.out.println(palavra);
        }
        System.out.println(listaPalavras.length);

        scan.close();
    }
}
