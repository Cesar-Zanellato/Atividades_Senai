// src/pages/TurmaDetailsPage.js
import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import axios from 'axios';

const TurmaDetailsPage = () => {
  const { turmaId } = useParams();
  const { user, logout } = useContext(AuthContext);
  const [turma, setTurma] = useState(null);
  const [atividades, setAtividades] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Requisição ao backend para obter detalhes da turma e atividades
    const fetchTurmaDetails = async () => {
      // Exemplo de requisição:
      // const turmaResponse = await axios.get(`/api/turmas/${turmaId}`);
      // setTurma(turmaResponse.data);
      // const atividadesResponse = await axios.get(`/api/turmas/${turmaId}/atividades`);
      // setAtividades(atividadesResponse.data);
      
      // Simulação de dados
      setTurma({ id: turmaId, nome: 'Turma Exemplo' });
      setAtividades([
        { id: 1, nome: 'Atividade 1' },
        { id: 2, nome: 'Atividade 2' }
      ]);
    };
    fetchTurmaDetails();
  }, [turmaId]);

  return (
    <div>
      <h2>Professor: {user.name}</h2>
      <button onClick={logout}>Sair</button>
      {turma && (
        <>
          <h3>Turma: {turma.nome}</h3>
          <Link to={`/turma/${turmaId}/cadastro-atividade`}>
            <button>Cadastrar Nova Atividade</button>
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