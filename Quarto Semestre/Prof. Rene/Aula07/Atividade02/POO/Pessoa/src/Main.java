public class Main {
    public static void main(String[] args){
        Carro corsa = new Carro();
        corsa.setCor("Amarelo");
        corsa.setMarca("Corsa");
        System.out.printf("Cor: %s --- Marca: %s \n", corsa.getCor(), corsa.getMarca());
        
        Carro celta = new Carro();
        celta.setCor("Azul");
        celta.setMarca("Celta");
        System.out.printf("Cor: %s --- Marca: %s \n", celta.getCor(), celta.getMarca());
    }
}
