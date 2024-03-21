import { useEffect, useState } from "react";
import "./Pessoa.css"

function Pessoa(props){

    const [inputNome, setInputNome] = useState(props.nome);
    const [inputProfissao, setInputProfissao] = useState(props.profissao);

    const handleTextNome = (event) => {
        setInputNome(event.target.value);
    }
    const handleTextProfissao = (event) => {
        setInputProfissao(event.target.value);
    }

    return(
        <main className="pessoaDivisoria">
            <section>
                <article>
                    <h2
                    >Nome: {inputNome}</h2>
                    <input 
                        type="text" 
                        placeholder="digite aqui o nome..." 
                        onChange={handleTextNome}
                        value={inputNome}
                    />
                    <p>Profissão: {inputProfissao}</p>
                    <input 
                        type="text" 
                        placeholder="digite aqui a profissão..." 
                        onChange={handleTextProfissao}
                        value={inputProfissao}
                    />
                </article>
            </section>
        </main>
    )
}

export default Pessoa;