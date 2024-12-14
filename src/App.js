import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Favoritos from './components/Favoritos';
import Perfil from './components/Perfil';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/perfil" element={<Perfil />} />

      </Routes>
    </Router>
  );
}

export default App;


