public class Estudante extends Usuario{
    private String universidade;

    public Estudante(){

    }
    
    public Estudante(String universidade) {
        this.universidade = universidade;
    }

    public Estudante(String nome, String email, String senha, Boolean isAdmin, String universidade) {
        super(nome, email, senha, isAdmin);
        this.universidade = universidade;
    }

    // metodos
    public String getUniversidade() {
        return universidade;
    }

    public void setUniversidade(String universidade) {
        this.universidade = universidade;
    }

    
}
