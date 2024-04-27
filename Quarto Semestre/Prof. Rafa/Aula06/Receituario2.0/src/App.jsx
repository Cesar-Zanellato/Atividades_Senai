import React, { useState } from 'react';
import './App.css';
import Hearder from './components/Hearder/Hearder.jsx';
import BodyCadastroReceita from './components/CadastroReceita/BodyCadastroReceita.jsx';
import BodyPesquisarReceita from './components/PesquisarReceita/BodyPesquisarReceita.jsx';
import BodyEditarReceita from './components/EditarReceita/BodyEditarReceita.jsx';
import BodyDeletarReceita from './components/DeletarReceita/BodyDeletarReceita.jsx';

function App() {

  let receitas = [
    {
        nome: "Bolo de Chocolate",
        ingredientes: [
            { nome: "Chocolate em Pó", quantidade: 200, unidade: "g" },
            { nome: "Farinha de Trigo", quantidade: 250, unidade: "g" },
            { nome: "Açúcar", quantidade: 200, unidade: "g" }
        ],
        modoDePreparo: "1. Misture todos os ingredientes secos. 2. Adicione os líquidos. 3. Asse por 40 minutos."
    },
    {
        nome: "Risoto de Funghi",
        ingredientes: [
            { nome: "Arroz Arbóreo", quantidade: 300, unidade: "g" },
            { nome: "Funghi Seco", quantidade: 100, unidade: "g" },
            { nome: "Caldo de Legumes", quantidade: 500, unidade: "ml" }
        ],
        modoDePreparo: "1. Hidrate o funghi. 2. Refogue o arroz com o funghi. 3. Adicione o caldo aos poucos até o arroz ficar al dente."
    },
    {
        nome: "Salada de Frutas",
        ingredientes: [
            { nome: "Banana", quantidade: 2, unidade: "un" },
            { nome: "Maçã", quantidade: 2, unidade: "un" },
            { nome: "Laranja", quantidade: 2, unidade: "un" }
        ],
        modoDePreparo: "1. Corte as frutas em pedaços. 2. Misture tudo em uma tigela. 3. Sirva gelado."
    }
  ];

  const [page, setPage] = useState(<BodyCadastroReceita/>);

  return (
    <main>
      <Hearder/>
      <section className='btnsNavegacao'>
          <button onClick={() => { setPage(<BodyCadastroReceita/>) }}>Cadastrar</button>
          <button onClick={() => { setPage(<BodyPesquisarReceita/>) }}>Pesquisar</button>
          <button onClick={() => { setPage(<BodyEditarReceita/>) }}>Editar</button>
          <button onClick={() => { setPage(<BodyDeletarReceita/>) }}>Excluir</button>
      </section>
      <body>
          {React.cloneElement(page, { receitas })}
      </body>
    </main>
  );
};

export default App;