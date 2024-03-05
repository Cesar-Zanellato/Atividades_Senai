public class Main {
    public static void main(String[] args){
        // Utilizando o construtor parcial
        Carro corsa = new Carro("Corsa", 100);

        // Atribuindo mais um valor no objeto
        corsa.setCor("Amarelo");

        // System.out.printf("Cor: %s --- Modelo: %s --- VelocidadeMáxima: %d \n", 
        //     corsa.getCor(), 
        //     corsa.getModelo(), 
        //     corsa.getVelocidadeMaxima()
        // );
        System.out.println(corsa.toString());
        
        // Utilizando o contrutor vazio
        Carro celta = new Carro();

        // Atribuindo os valores ao objeto
        celta.setCor("Azul");
        celta.setModelo("Celta");
        celta.setVelocidadeMaxima(180);

        System.out.printf("Cor: %s --- Modelo: %s --- Velocidade Máxima: %d \n", 
            celta.getCor(), 
            celta.getModelo(), 
            celta.getVelocidadeMaxima()
        );

    }
}
