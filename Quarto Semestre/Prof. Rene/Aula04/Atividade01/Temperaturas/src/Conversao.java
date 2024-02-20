import java.util.Scanner;

public class Conversao {
    public static void main(String[] args) throws Exception {
        Scanner scan = new Scanner(System.in);

        System.out.println("Digite a temperatura em Celsius: ");
        float tempCelsius = scan.nextFloat();

        float tempFahrenheit = ((tempCelsius * 9/5) + 32);

        System.out.printf("A temperatura %f em Celsius, na conversão para Fahrenheit fica: %f °F", tempCelsius, tempFahrenheit);

        scan.close();
    }
}
