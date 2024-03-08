public class Main {
    public static void main(String[] args) {
        
        Pessoa cesar = new Pessoa("Cesar", 17, 60, 'M' );
        
        Pessoa ciro = new Pessoa("Ciro",20, 70, 'M' );
        
        Pessoa luigi = new Pessoa("Luigi", 20, 70, 'M' );

        System.out.println(cesar.toString());
        System.out.println(ciro.toString());
        System.out.println(luigi.toString());

        if (ciro.equals(luigi)) {
            System.out.println("São iguais");
        } else {
            System.out.println("Não são iguais!");
        };

        if (luigi == ciro) {
            System.out.println("São iguais");
        } else {
            System.out.println("Não são iguais!");
        };
    }
}
