public class Biologo extends Usuario {
    private String universidade;
    private String companhia;
    private Integer codigo;

    // Construtor vazio
    public Biologo(){
        
    }

    // Construtor completo da Classe
    public Biologo(String universidade, String companhia, Integer codigo) {
        this.universidade = universidade;
        this.companhia = companhia;
        this.codigo = codigo;
    }

    // Super Construtor
    public Biologo(String nome, String email, String senha, Boolean isAdmin, String universidade, String companhia,
            Integer codigo) {
        super(nome, email, senha, isAdmin);
        this.universidade = universidade;
        this.companhia = companhia;
        this.codigo = codigo;
    }

    // Metodos
    public String getUniversidade() {
        return universidade;
    }

    public void setUniversidade(String universidade) {
        this.universidade = universidade;
    }

    public String getCompanhia() {
        return companhia;
    }

    public void setCompanhia(String companhia) {
        this.companhia = companhia;
    }

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }



    
}
