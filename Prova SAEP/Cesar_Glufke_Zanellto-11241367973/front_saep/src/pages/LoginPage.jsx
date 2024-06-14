import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import "../App.css"


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password, navigate);
  };

  return (
    <main>
      <section className='cadastro'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              placeholder='E-Mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='divBtn'>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
