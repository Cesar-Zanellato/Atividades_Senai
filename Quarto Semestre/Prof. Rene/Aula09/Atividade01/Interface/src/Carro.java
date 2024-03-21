import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Carro {
    
    private Cor cor;
    private String marca;
    private String modelo;
    private Integer velocidadeMaxima;
    private LocalDate ultimaRevisao;
    private LocalDateTime criacao = LocalDateTime.now();

    public Carro(){

    };
    public Carro(Cor cor, String marca, String modelo, Integer velocidadeMaxima, LocalDate ultimaRevisao, LocalDateTime criacao){
        this.cor = cor;
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.ultimaRevisao = ultimaRevisao;
        this.criacao = criacao;
    };
    public Carro(Cor cor, String marca, String modelo, Integer velocidadeMaxima){
        this.cor = cor;
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    public Cor getCor() {
        return cor;
    };
    public void setCor(Cor cor) {
        this.cor = cor;
    };
    public String getMarca() {
        return marca;
    };
    public void setMarca(String marca) {
        this.marca = marca;
    };
    public String getModelo() {
        return modelo;
    };
    public void setModelo(String modelo) {
        this.modelo = modelo;
    };
    public Integer getVelocidadeMaxima() {
        return velocidadeMaxima;
    };
    public void setVelocidadeMaxima(Integer velocidadeMaxima) {
        this.velocidadeMaxima = velocidadeMaxima;
    };
    public LocalDate getUltimaRevisao() {
        return ultimaRevisao;
    };
    public void setUltimaRevisao(LocalDate ultimaRevisao) {
        this.ultimaRevisao = ultimaRevisao;
    };
    public LocalDateTime getCriacao() {
        return criacao;
    };
    public void setCriacao(LocalDateTime criacao) {
        this.criacao = criacao;
    };

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((cor == null) ? 0 : cor.hashCode());
        result = prime * result + ((marca == null) ? 0 : marca.hashCode());
        result = prime * result + ((modelo == null) ? 0 : modelo.hashCode());
        result = prime * result + ((velocidadeMaxima == null) ? 0 : velocidadeMaxima.hashCode());
        result = prime * result + ((ultimaRevisao == null) ? 0 : ultimaRevisao.hashCode());
        result = prime * result + ((criacao == null) ? 0 : criacao.hashCode());
        return result;
    };

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Carro other = (Carro) obj;
        if (cor == null) {
            if (other.cor != null)
                return false;
        } else if (!cor.equals(other.cor))
            return false;
        if (marca == null) {
            if (other.marca != null)
                return false;
        } else if (!marca.equals(other.marca))
            return false;
        if (modelo == null) {
            if (other.modelo != null)
                return false;
        } else if (!modelo.equals(other.modelo))
            return false;
        if (velocidadeMaxima == null) {
            if (other.velocidadeMaxima != null)
                return false;
        } else if (!velocidadeMaxima.equals(other.velocidadeMaxima))
            return false;
        if (ultimaRevisao == null) {
            if (other.ultimaRevisao != null)
                return false;
        } else if (!ultimaRevisao.equals(other.ultimaRevisao))
            return false;
        if (criacao == null) {
            if (other.criacao != null)
                return false;
        } else if (!criacao.equals(other.criacao))
            return false;
        return true;
    };

    @Override
    public String toString() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(
                "dd/MM/yyyy HH:mm:ss");
        String criacaoString = formatter.format(criacao);
        
        return "Carro [cor=" + cor +
                ", marca=" + marca +
                ", modelo=" + modelo +
                ", velocidadeMaxima=" + velocidadeMaxima +
                ", ultimaRevisao=" + ultimaRevisao +
                ", criacao=" + criacaoString + "]";
    };
    
};
