function BodyPesquisarReceita(props) {

    const editarReceita = (index, updatedRecipe) => {
      props.atualizarReceita(index, updatedRecipe);
    };
  
    const deletarReceita = (index) => {
      props.deletarReceita(index);
      console.log(props);
    };
  
    return (
      <div>
        {props.receitas && props.receitas.map((receita, index) => (
          <div key={index}>
            <h3>{receita.nome}</h3>
            <ul>
              {receita.ingredientes.map((ingrediente, ingIndex) => (
                <li key={ingIndex}>
                  {ingrediente.quantidade} {ingrediente.unidade} de {ingrediente.nome}
                </li>
              ))}
            </ul>
            <p>{receita.modoDePreparo}</p>
            <button onClick={() => editarReceita(index, receita)}>Editar</button>
            <button onClick={() => deletarReceita(index)}>Deletar</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default BodyPesquisarReceita;


