import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../components/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css"

const ProfessorProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const [turmas, setTurmas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTurmas = async () => {
      // const response = await axios.get(`http://localhost:8080/turmas`);
      // setTurmas(response.data);
      
      setTurmas([
        { id: 1, nome: 'Desenvolvimento de sistemas SA01' },
        { id: 2, nome: 'Redes de coputadores SN02' },
        { id: 3, nome: 'Desenvolvimento de sistemas B402' }
      ]);
    };
    fetchTurmas();
  }, [turmas]);

  function visualizarAtividade () {
    
      navigate("/turmas")
    
  }

  return (
    <div>
      <section className='header'>
        <h2>Bem-vindo, {user.name}</h2>
        <button onClick={() => logout(navigate)}>Sair</button>
      </section>
      <section className='divBtnTurma'>
        <Link to="/cadastro-turma">
          <button>Cadastrar Nova Turma</button>
        </Link>
      </section>
      <section className='divTurmas'>
        <h3>Turmas</h3>

        <div className='divTurma'>
          <div className='informacoes'>
            <label>Número</label>
            <label>Nome</label>
            <label>Ação</label>
          </div>
          {turmas.map((turma) => (
            <form key={turma.id} >
                <div className='divTurmaItens'>
                  <h3 to={`/turma/${turma.id}`}>{turma.id}</h3>
                </div>  
                <div className='divTurmaItens'>
                  <Link to={`/turma/${turma.id}`}>{turma.nome}</Link>
                </div>  
                <div className='divTurmaItens'> 
                    <button className='btnExcluir' >Excluir</button>
                    <button className='btnVisualizar' onClick={() => visualizarAtividade()}>Visualizar</button>
                </div>
            </form>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfessorProfilePage;
