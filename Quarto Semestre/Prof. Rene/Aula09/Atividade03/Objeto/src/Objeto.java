

public abstract class Objeto {
    private Integer id;
    
    public Integer calcularId(){
        return (int) Math.random();
    };

    public abstract boolean idExiste(Integer id);
}