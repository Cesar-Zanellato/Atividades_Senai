// src/components/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password, navigate) => {
    // Faça uma requisição ao backend para autenticar o usuário
    // Exemplo:
    // const response = await api.post('/login', { email, password });
    // setUser(response.data);
    // Simulação de login
    if (email === 'professor@escola.com' && password === 'senha123') {
      setUser({ id: 1, name: 'Professor Exemplo', email });
      navigate('/profile');
    } else {
      alert('Email ou senha inválidos');
    }
  };

  const logout = (navigate) => {
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
