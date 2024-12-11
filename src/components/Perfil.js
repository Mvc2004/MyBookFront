import React from 'react';
import '../styles/Perfil.css'; // Archivo de estilos específicos

const Perfil = () => {
  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <h1>Mi Perfil</h1>
      </div>
      <div className="perfil-content">
        <div className="perfil-avatar">
          <img src="https://via.placeholder.com/150" alt="Avatar de usuario" />
        </div>
        <div className="perfil-info">
          <h2>Nombre de Usuario</h2>
          <p><strong>Correo:</strong> usuario@ejemplo.com</p>
          <p><strong>Miembro desde:</strong> Enero 2024</p>
          <button className="editar-btn">Editar Perfil</button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
