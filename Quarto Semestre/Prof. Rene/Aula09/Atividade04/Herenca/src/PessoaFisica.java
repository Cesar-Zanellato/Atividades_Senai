import java.time.LocalDate;

public class PessoaFisica extends Pessoa {
    private String cpf;
    private String rg;
    private LocalDate dataNascimento;

    
    // Herança completa com super
    public PessoaFisica(String nome, String codigo, String tipo, boolean status, String username, String senha,
            String cpf, String rg, LocalDate dataNascimento) {
        super(nome, codigo, tipo, status, username, senha);
        this.cpf = cpf;
        this.rg = rg;
        this.dataNascimento = dataNascimento;
    }

    public PessoaFisica(){}

    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public String getRg() {
        return rg;
    }
    public void setRg(String rg) {
        this.rg = rg;
    }
    public LocalDate getDataNascimento() {
        return dataNascimento;
    }
    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    
}
