// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import ProfessorProfilePage from './pages/ProfessorProfilePage';
import TurmaFormPage from './pages/TurmaFormPage';
import TurmaDetailsPage from './pages/TurmaDetailsPage';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfessorProfilePage />
            </ProtectedRoute>
          } />
          <Route path="/cadastro-turma" element={
            <ProtectedRoute>
              <TurmaFormPage />
            </ProtectedRoute>
          } />
          <Route path="/turma/:turmaId" element={
            <ProtectedRoute>
              <TurmaDetailsPage />
            </ProtectedRoute>
          } />
          {/* Outras rotas protegidas */}
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
