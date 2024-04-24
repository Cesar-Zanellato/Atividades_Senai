import { useState } from "react";


function BodyCadastroReceita(){

    const [quantidadeIngredientes, setQuantidadeIngredientes] = useState(0);

    function adicionarIngredientes(event){
        setQuantidadeIngredientes(event.target.value);
    }


    return(
        <main>
            <h2>Cadastrar Receita</h2>
            <section>
                <label>Nome da Receita:</label>
                <input type="text" />
                <label>Modo de Preparo: </label>
                <input type="text" />
            </section>
                <h3>Ingredientes da Receita:</h3>
            <section className="ingredientesReceita">

                <button 
                    onClick={adicionarIngredientes}
                    value={quantidadeIngredientes}
                >Add Ingredientes</button>
            </section>
        </main>
    );
};

export default BodyCadastroReceita;