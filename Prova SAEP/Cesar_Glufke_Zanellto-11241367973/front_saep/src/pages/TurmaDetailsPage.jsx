import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import axios from 'axios';
import "../App.css"

const TurmaDetailsPage = () => {
  const { turmaId } = useParams();
  const { user, logout } = useContext(AuthContext);
  const [turma, setTurma] = useState(null);
  const [atividades, setAtividades] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTurmaDetails = async () => {
      
      // const atividadesResponse = await axios.get(`http://localhost:8080/atividades`);
      // setAtividades(atividadesResponse.data);
      
      // Simulação de dados
      setTurma({ id: turmaId, nome: 'Desenvolvimento de sistemas SA01' });
      setAtividades([
        { id: 1, nome: 'Atividade 1' },
        { id: 2, nome: 'Atividade 2' }
      ]);
    };
    fetchTurmaDetails();
  }, [turmaId]);

  function visualizarAtividade () {
    
    navigate("/turmas")
  
}

  return (
    <div>
      <section className='header'>
        <h2>Bem-vindo, {user.name}</h2>
        <button onClick={() => logout(navigate)}>Sair</button>
      </section>
      {turma && (
        <>
          <h3>Turma: {turma.nome}</h3>
          <Link to={`/turma/cadastro-atividade`}>
            <button onClick={()=> cadastrarAtividade()} >Cadastrar Nova Atividade</button>
          </Link>
          <h4>Atividades</h4>
          <ul>
            {atividades.map((atividade) => (
              <li key={atividade.id}>{atividade.nome}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TurmaDetailsPage;
