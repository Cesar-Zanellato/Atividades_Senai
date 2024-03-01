import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Scanner;

public class Revisao {
    public static void main(String[] args) {
        // Entrada de Dados
        Scanner scan = new Scanner(System.in);

        // declaração de variaveis
        String nomeUsuario;
        int numeroPalavra;
        
        System.out.println("Digite seu nome: ");
        nomeUsuario = scan.nextLine();

        helloWord(nomeUsuario);

        System.out.println("Deseja usar a calculadora?");
        if(scan.nextLine().toLowerCase() == "s" || scan.nextLine().toLowerCase() == "sim"){
            calculadora();   
        }
        
        System.out.println("Digite quantas palavras você quer adicionar: ");
        numeroPalavra = scan.nextInt();
        lista(numeroPalavra);

        scan.close();
    }

    public static void helloWord(String nomeUsuario){
        System.out.printf("Olá %s.", nomeUsuario);
    }

    public static void calculadora(){

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

    public static void lista(int numeroPalavra){
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