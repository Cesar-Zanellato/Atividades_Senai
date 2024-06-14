import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css"


const TurmaFormPage = () => {
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Enviar o nome da turma para o backend
    // Exemplo de requisição:
    await axios.post('http://localhost:8080/turmas', { nome });
    
    // Simulação de envio
    console.log('Turma cadastrada:', nome);
    
    navigate('/profile');
  };

  return (
    <main>
      <section className='cadastro'>
        <h2>Cadastrar Nova Turma</h2>
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={nome}
              placeholder='Nome da Turma'
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

export default TurmaFormPage;
