import { useState } from 'react';
import './App.css';
import Hearder from './components/Hearder/Hearder.jsx';
import BodyCadastroReceita from './components/CadastroReceita/BodyCadastroReceita.jsx';
import BodyDeletarReceita from './components/DeletarReceita/BodyDeletarReceita.jsx';
import BodyEditarReceita from './components/EditarReceita/BodyEditarReceita.jsx';

function App() {

  const[cadastrarReceita, setCadastrarReceita] = useState(false);
  const[pesquisarReceita, setPesquisarReceita] = useState(false);
  const[excluirReceita, setExcluirReceita] = useState(false);


  return (
    <main>
      <Hearder/>
      <section className='btnsNavegacao'>
          <button onClick={() => { setCadastrarReceita(!cadastrarReceita)}}>Cadastrar</button>
          <button onClick={() => { setPesquisarReceita(!pesquisarReceita) }}>Pesquisar</button>
          <button onClick={() => { setExcluirReceita(!excluirReceita) }}>Excluir</button>
      </section>
      {cadastrarReceita && <BodyCadastroReceita/>}
      {pesquisarReceita && <BodyEditarReceita/>}
      {excluirReceita && <BodyDeletarReceita/>}

    </main>
  );
};

export default App;
