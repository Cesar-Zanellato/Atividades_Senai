import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Registro {
    private Biologo biologo;
    private Especie especie;
    private LocalDate dataRegistro;
    private String localizacao;
    private MetodoColeta metodoColeta;

    public Registro(){

    }
    
    public Registro(Biologo biologo, Especie especie, LocalDate dataRegistro, String localizacao, MetodoColeta metodoColeta) {
        this.biologo = biologo;
        this.especie = especie;
        this.dataRegistro = dataRegistro;
        this.localizacao = localizacao;
        this.metodoColeta = metodoColeta;
    }

    public Biologo getBiologo() {
        return biologo;
    }
    public void setBiologo(Biologo biologo) {
        this.biologo = biologo;
    }
    public Especie getEspecie() {
        return especie;
    }
    public void setEspecie(Especie especie) {
        this.especie = especie;
    }
    public LocalDate getDataRegistro() {
        return dataRegistro;
    }
    public void setDataRegistro(LocalDate dataRegistro) {
        this.dataRegistro = dataRegistro;
    }
    public String getLocalizacao() {
        return localizacao;
    }
    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public MetodoColeta getMetodoColeta() {
        return metodoColeta;
    }

    public void setMetodoColeta(MetodoColeta metodoColeta) {
        this.metodoColeta = metodoColeta;
    }

    @Override
    public String toString() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(
            "dd/MM/yyyy");
        String criacaoString = formatter.format(dataRegistro);
    

        return "Registro [biologo=" + biologo + ", especie=" + especie + ", dataRegistro=" + criacaoString
                + ", localizacao=" + localizacao + ", metodoColeta=" + metodoColeta + "]";
    }
    
    

}
