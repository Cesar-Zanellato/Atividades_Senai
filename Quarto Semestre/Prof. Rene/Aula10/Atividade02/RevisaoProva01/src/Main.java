import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        
        Usuario cesar = new Estudante();

        Usuario rene = new Biologo("Senai", "Fiesc", 1);

        Registro analise01 = new Registro(biologo, especie, LocalDate.now(), "Brasil", MetodoColeta.inLoco);
    }
}
