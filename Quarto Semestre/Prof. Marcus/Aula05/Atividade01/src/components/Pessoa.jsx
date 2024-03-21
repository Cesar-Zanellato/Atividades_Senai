import { useEffect, useState } from "react";
import "./Pessoa.css"

function Pessoa(props){

    const [input, setInput] = useState(props.nome);

    const handleTextNome = (event) => {
        setInput(event.target.value);
    }

    return(
        <main className="pessoaDivisoria">
            <section>
                <article>
                    <h2
                    >Nome: {input}</h2>
                    <input 
                        type="text" 
                        placeholder="digite aqui o nome..." 
                        onChange={handleTextNome}
                        value={input}
                    />
                    <p>Profissão: {props.profissao}</p>
                </article>
            </section>
        </main>
    )
}

export default Pessoa;