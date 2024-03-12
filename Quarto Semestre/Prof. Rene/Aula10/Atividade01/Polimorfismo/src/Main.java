public class Main {
    
    public static void main(String[] args) {
        Cachorro c = new Cachorro();
        Gato g = new Gato();

        c.emiteSom();
        g.emiteSom();

        Animal animal = new Cachorro();
        animal.emiteSom();
    }
}
