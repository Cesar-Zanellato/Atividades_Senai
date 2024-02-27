import java.util.Scanner;

public class Strings {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        // String string = "Uma string";
        // char caracter = 'a';
        String string = scan.nextLine();
        String maiusculaString = string.toUpperCase();

        // remove os espaços no começo e no fim da string
        string = string.trim();

        // concatenação usando o concat
        // String concatenacao = string.concat(maiusculaString);
        String concatenacao = string + " " + maiusculaString;

        // Para Classes, compara local na memoria
        if(string.equals(maiusculaString)){
          System.out.println("São Iguais!");  
        }

        // Metodo de comparacao padrão
        if(string == maiusculaString){
          System.out.println("São Iguais!");  
        }

        // Tranforma em um array e percorre ele, caso haja diferença ele devolvera o indice do array
        if(string.compareToIgnoreCase(maiusculaString) == 0){
          System.out.println("São Iguais!");  
        }

        /** SPLIT*/
        String ucs = "uc1, uc2, uc3";

        // Percore a String e separa por um caracter especifico, no caso ","
        String[] listaUcs = ucs.split(",");
        
        for(String uc: listaUcs){
            System.out.println(uc);
        }
        // Tamanho da lista
        System.out.println(listaUcs.length);

        scan.close();
    }
}
