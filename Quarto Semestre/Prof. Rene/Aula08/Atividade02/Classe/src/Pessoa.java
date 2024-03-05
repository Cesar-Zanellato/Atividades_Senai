public class Pessoa {
    private String nome;
    private Integer idade;
    private Integer peso;
    private Character sexo;

    public Pessoa(){};

    public Pessoa(String nome, Integer idade, Integer peso, Character sexo){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.sexo = sexo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    public Integer getPeso() {
        return peso;
    }

    public void setPeso(Integer peso) {
        this.peso = peso;
    }

    public Character getSexo() {
        return sexo;
    }

    public void setSexo(Character sexo) {
        this.sexo = sexo;
    };
    
}
