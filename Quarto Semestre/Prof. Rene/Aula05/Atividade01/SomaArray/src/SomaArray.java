import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class SomaArray {
    public static void main(String[] args) throws Exception {

        Scanner scan = new Scanner(System.in);
        List<Integer> list = new ArrayList<Integer>();
        // List<Integer> list = Arrays.asList(5, 5, 6, 6);

        System.out.println("quantos numeros quer digitar: ");
        int j = scan.nextInt();


        for(int i=0; i<j ; i++){
            System.out.println("digite o valor "+(i+1)+":");
            list.add(scan.nextInt());
        }
        scan.close();
        
        Integer soma = list.stream()
            .reduce((n1, n2) -> (n1 + n2))
            .orElse(0);
            System.out.println(("a soma dos valores é: "+ soma));

        Integer somaImpar = list.stream()
            .filter(n -> n%2!=0)
            .reduce((n1, n2) -> (n1 + n2))
            .orElse(0);
            System.out.println(("a soma dos valores impar é: "+somaImpar));

        Integer somaPar = list.stream()
            .filter(n -> n%2==0)
            .reduce((n1, n2) -> (n1 + n2))
            .orElse(0);
            System.out.println(("a soma dos valores par é: "+somaPar));  
             

    }
}