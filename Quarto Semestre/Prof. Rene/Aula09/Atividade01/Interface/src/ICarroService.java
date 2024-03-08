
public interface ICarroService {

    public Carro criarCarro(Cor cor, String marca, String modelo, Integer velocidadeMaxima);
    
    public Carro leituraCarro(Integer id);

    public Carro atualizarCarro(Integer id, Cor cor, String marca, String modelo, Integer velocidadeMaxima);

    public void excluirCarro(Integer id);
}