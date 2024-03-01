import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Lista {
    public void lista(int numeroPalavra){
        Scanner scan = new Scanner(System.in);

        List<String> listaPalavras = new ArrayList<>();

        String palavra;

        for(int i = 0; i < numeroPalavra; i++){
            System.out.printf("Digite a palavra %d", i + 1);
            palavra = scan.nextLine();
            listaPalavras.add(palavra);
        }

        for(String item: listaPalavras){
            System.out.println(item);
        }
        scan.close();
    }
}
