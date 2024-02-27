import java.util.Scanner;

public class Conversao {
    public static void main(String[] args) throws Exception {
        Scanner scan = new Scanner(System.in);
        try{
            System.out.println("Digite um valor numerico: ");
            Integer numero = scan.nextInt();
            System.out.println(numero);
        }catch(Exception ex){
            System.out.println("Ocorreu um erro. Talvez você não tenha digitado um número válido.");
        }

        scan.close();
    }
}
