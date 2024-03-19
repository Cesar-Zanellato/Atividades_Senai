import "./Pessoa.css"

function Pessoa(props){

    return(
        <main className="pessoaDivisoria">
            <section>
                <article>
                    <h2>Nome: {props.nome}</h2>
                    <p>Profissão: {props.profissao}</p>
                </article>
            </section>
        </main>
    )
}

export default Pessoa;