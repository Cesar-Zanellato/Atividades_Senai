import { useState } from 'react';
import './App.css';
import RenderBoolean from "./components/RenderBoolean/RenderBoolean.jsx"; 
import RenderCondicional from './components/RenderCondicional/RenderCondicional.jsx';
import RenderTernario from './components/RenderTernario/RenderTernario.jsx';
import RenderTernarioFalse from './components/RenderTernarioFalse/RenderTernarioFalse.jsx';
import RenderFuncaoTrue from './components/RenderFuncaoTrue/RenderFuncaoTrue.jsx';
import RenderFuncaoFalse from './components/RenderFuncaoFalse/RenderFuncaoFalse.jsx';

function App() {
  const [estado, setEstado] = useState(false);
  const [inpIdade, setInpIdade] = useState();

  function atualizarIdade(event){
    setInpIdade(event.target.value);
  }

  function renderPorFuncao(){
    if(inpIdade >= 65){
      return <RenderFuncaoTrue/>
    }else{
      return <RenderFuncaoFalse/>
    }
  }

  return (
    <main>
      <section>
        <button onClick={() => { setEstado(!estado) }}>Mudar Estado</button>
        { estado && <RenderBoolean/> }
        <input type="number" 
          placeholder='Digite sua idade'
          value={inpIdade}
          onChange={atualizarIdade}
        />
        { inpIdade >= 18 && <RenderCondicional/> }
        { inpIdade <= 12 ? <RenderTernario/> : <RenderTernarioFalse/> }
        {renderPorFuncao}
      </section>
    </main>
  )
}

export default App;
