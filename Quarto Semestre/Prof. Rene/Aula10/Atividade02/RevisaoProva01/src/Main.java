import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        
        Usuario luigi = new Usuario("Luigi", "luigisantostk@gmail.com", "minhasenha", false);

        Biologo matheus = new Biologo("Matheus", "Matheus@gmail.com", "SenhaMatheus", false, "Cesuca", "CatarinenseTecnology", 1234  );

        Estudante cesar = new Estudante("Cesar", "Cesar@gmail.com", "SenhaCesar", false, "Cesuca");

        Especie cachorro = new Especie("Cannuniun", "Cachorro", Habitat.aquatico, "Reprodução", "Peludo");

        Registro registro01 = new Registro( matheus, cachorro, LocalDate.now(), "Florianopolis", MetodoColeta.inLoco);

        System.out.println(luigi.toString());
        System.out.println(matheus.toString());
        System.out.println(cesar.toString());
        System.out.println(cachorro.toString());
        System.out.println(registro01.toString());
    }
}
