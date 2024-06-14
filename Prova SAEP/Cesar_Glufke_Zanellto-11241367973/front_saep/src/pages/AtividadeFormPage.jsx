import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css"


const AtividadeFormPage = () => {
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Enviar o nome da turma para o backend
    // Exemplo de requisição:
    // await axios.post('http://localhost:8080/atividade', { descricao });
    
    // Simulação de envio
    console.log('Atividade cadastrada:', descricao);
    
    navigate('/profile');
  };

  return (
    <main>
      <section className='cadastro'>
        <h2>Cadastrar Nova Atividade</h2>
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={nome}
              placeholder='Nome da Atividade'
              onChange={(e) => setNome(e.target.value)}
              required
            />
          <div className='divBtn'>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default AtividadeFormPage;
