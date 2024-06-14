import axios from 'axios';
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password, navigate) => {
    // Faça uma requisição ao backend para autenticar o usuário
    // Exemplo:
    try{
      const response = await axios.post('http://localhost:8080/professores', { email, password });
      setUser(response.data);
      navigate('/profile');
    } catch {
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
