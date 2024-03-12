public class Especie {
    private String nomeCientifico;
    private String nomeComum;
    private Habitat habitat;
    private String destribuicaoGeografica;
    private String caracteristicasMorfologicas;

    public Especie(){

    }

    public Especie(String nomeCientifico, String nomeComum, Habitat habitat, String destribuicaoGeografica,
            String caracteristicasMorfologicas) {
        this.nomeCientifico = nomeCientifico;
        this.nomeComum = nomeComum;
        this.habitat = habitat;
        this.destribuicaoGeografica = destribuicaoGeografica;
        this.caracteristicasMorfologicas = caracteristicasMorfologicas;
    }

    public String getNomeCientifico() {
        return nomeCientifico;
    }

    public void setNomeCientifico(String nomeCientifico) {
        this.nomeCientifico = nomeCientifico;
    }

    public String getNomeComum() {
        return nomeComum;
    }

    public void setNomeComum(String nomeComum) {
        this.nomeComum = nomeComum;
    }

    public Habitat getHabitat() {
        return habitat;
    }

    public void setHabitat(Habitat habitat) {
        this.habitat = habitat;
    }

    public String getDestribuicaoGeografica() {
        return destribuicaoGeografica;
    }

    public void setDestribuicaoGeografica(String destribuicaoGeografica) {
        this.destribuicaoGeografica = destribuicaoGeografica;
    }

    public String getCaracteristicasMorfologicas() {
        return caracteristicasMorfologicas;
    }

    public void setCaracteristicasMorfologicas(String caracteristicasMorfologicas) {
        this.caracteristicasMorfologicas = caracteristicasMorfologicas;
    }

    

    
}
