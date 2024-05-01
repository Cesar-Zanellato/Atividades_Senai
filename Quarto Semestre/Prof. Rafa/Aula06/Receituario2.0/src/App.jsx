import React, { useState } from 'react';
import './App.css';
import './components/CadastroReceita/BodyCadastroReceita.css'
import Hearder from './components/Hearder/Hearder.jsx';
import BodyPesquisarReceita from './components/PesquisarReceita/BodyPesquisarReceita.jsx';
import BodyEditarReceita from './components/EditarReceita/BodyEditarReceita.jsx';
import BodyDeletarReceita from './components/DeletarReceita/BodyDeletarReceita.jsx';

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



function BodyCadastroReceita(){

  const [inputNome, setInputNome] = useState('')
  const [inputModoPreparo, setInputModoPreparo] = useState('')
  const [inpIngNome1, setInpIngNome1] = useState('')
  const [inpIngNome2, setInpIngNome2] = useState('')
  const [inpIngNome3, setInpIngNome3] = useState('')
  const [inpIngQtda1, setInpIngQtda1] = useState('')
  const [inpIngQtda2, setInpIngQtda2] = useState('')
  const [inpIngQtda3, setInpIngQtda3] = useState('')
  const [inpIngUn1, setInpIngUn1] = useState('')
  const [inpIngUn2, setInpIngUn2] = useState('')
  const [inpIngUn3, setInpIngUn3] = useState('')
  
  function tratarInputNome(event){
      setInputNome(event.target.value)
    }
  function tratarInputModoPreparo(event){
    setInputModoPreparo(event.target.value)
  }
  function tratarInputNome(event){
      setInputNome(event.target.value)
    }
    function tratarIngNome1(event){
      setInpIngNome1(event.target.value)
  }
    function tratarIngNome2(event){
      setInpIngNome2(event.target.value)
    }
    function tratarIngNome3(event){
      setInpIngNome3(event.target.value)
    }
    function tratarIngQtd1(event){
      setInpIngQtda1(event.target.value)
    }
    function tratarIngQtd2(event){
      setInpIngQtda2(event.target.value)
    }
    function tratarIngQtd3(event){
      setInpIngQtda3(event.target.value)
    }
    function tratarIngUn1(event){
      setInpIngUn1(event.target.value)
    }
    function tratarIngUn2(event){
      setInpIngUn2(event.target.value)
    }
    function tratarIngUn3(event){
      setInpIngUn3(event.target.value)
    }
    
    
    function cadastrarReceita(){
      let receita = {
        nome: inputNome,
        ingredientes: [
          { nome:  inpIngNome1, quantidade: inpIngQtda1, unidade: inpIngUn1 },
          { nome:  inpIngNome2, quantidade: inpIngQtda2, unidade: inpIngUn2 },
          { nome:  inpIngNome3, quantidade: inpIngQtda3, unidade: inpIngUn3 },
        ],
        modoDePreparo: inputModoPreparo
      }
      receitas.push(receita)
      console.log(receitas);
    }
    
    
  return(
      <main>
          <h2>Cadastrar Receita</h2>
          <section>
              <label>Nome da Receita:</label>
              <input type="text" value={inputNome} onChange={tratarInputNome}/>
              <label>Modo de Preparo: </label>
              <textarea type="text" value={inputModoPreparo} onChange={tratarInputModoPreparo}/>
          </section>
              <h3>Ingredientes da Receita:</h3>
          <section className="ingredientesReceita">
              <div className="divIngrediente">
                  <label>Nome do Ingrediente: </label>
                  <input type="text" value={inpIngNome1} onChange={tratarIngNome1}/>
                  <label>Quantidade: </label>
                  <input type="number" min={0} name="" className="inptNumber" value={inpIngQtda1} onChange={tratarIngQtd1}/>
                  <label>Unidade: </label>
                  <input type="text" className="inptNumber" value={inpIngUn1} onChange={tratarIngUn1}/>
              </div>
              <div className="divIngrediente">
                  <label>Nome do Ingrediente: </label>
                  <input type="text" value={inpIngNome2} onChange={tratarIngNome2}/>
                  <label>Quantidade: </label>
                  <input type="number" min={0} name="" className="inptNumber" value={inpIngQtda2} onChange={tratarIngQtd2}/>
                  <label>Unidade: </label>
                  <input type="text" className="inptNumber" value={inpIngUn2} onChange={tratarIngUn2}/>
              </div>
              <div className="divIngrediente">
                  <label>Nome do Ingrediente: </label>
                  <input type="text" value={inpIngNome3} onChange={tratarIngNome3}/>
                  <label>Quantidade: </label>
                  <input type="number" min={0} name="" className="inptNumber" value={inpIngQtda3} onChange={tratarIngQtd3}/>
                  <label>Unidade: </label>
                  <input type="text" className="inptNumber" value={inpIngUn3} onChange={tratarIngUn3}/>
              </div>
              <button className="btnFinalizarCadastro" onClick={cadastrarReceita}>Finalizar</button>
          </section>
      </main>
  );
};


function App(){ 
  
  const [page, setPage] = useState(<BodyCadastroReceita />);
  
  const atualizarReceita = (index, updatedRecipe) => {
    receitas[index] = updatedRecipe;
  };
  
  const deletarReceita = (index) => {
    receitas.splice(index, 1);
    setPage(<BodyPesquisarReceita receitas={receitas} editarReceita={editarReceita} deletarReceita={deletarReceita} />);
  };

  const editarReceita = (index, updatedRecipe) => {
    receitas[index] = updatedRecipe;
    setPage(<BodyPesquisarReceita receitas={receitas} editarReceita={editarReceita} deletarReceita={deletarReceita} />);
  };

  return (
    <main>
      <Hearder/>
      <section className='btnsNavegacao'>
          <button onClick={() => { setPage(<BodyCadastroReceita />) }}>Cadastrar</button>
          <button onClick={() => { setPage(<BodyPesquisarReceita receitas={receitas} editarReceita={editarReceita} deletarReceita={deletarReceita} />) }}>Pesquisar</button>
      </section>
      <div>
          {React.cloneElement(page, { receitas, atualizarReceita, deletarReceita })}
      </div>
    </main>
  );
};

export default App;