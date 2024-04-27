
function BodyPesquisarReceita(props){


    return(
        <main>
            <h2>Pesquisar Receita</h2>
            {props.receitas.map((receita, index) => (
                <section key={index}>
                    <label>Nome da Receita: {receita.nome}</label>
                    <label>Modo de Preparo: {receita.modoDePreparo}</label>
                    <h3>Ingredientes da Receita:</h3>
                    <section className="ingredientesReceita">
                        {receita.ingredientes.map((ingrediente, i) => (
                            <div key={i} className="divIngrediente">
                                <label>Nome do Ingrediente: {ingrediente.nome}</label>
                                <label>Quantidade: {ingrediente.quantidade}</label>
                                <label>Unidade: {ingrediente.unidade}</label>
                            </div>
                        ))}
                    </section>
                </section>
            ))}
        </main>
    );
};

export default BodyPesquisarReceita;