import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/libro1.png'; // Para el logo
import '../styles/Home.css'; // Para los estilos

const Home = () => {
  return (
    <div>
      {/* Barra de navegación */}
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-items">
          {/* Menú desplegable para Categorías */}
          <div className="dropdown">
            <button className="dropbtn">Categorías</button>
            <div className="dropdown-content">
              <Link to="/terror">Terror</Link>
              <Link to="/romance">Romance</Link>
              <Link to="/aventura">Aventura</Link>
              <Link to="/ciencia-ficcion">Ciencia Ficción</Link>
              <Link to="/fantasia">Fantasía</Link>
              <Link to="/misterio">Misterio</Link>
              <Link to="/suspenso">Suspenso</Link>
              <Link to="/drama">Drama</Link>
              <Link to="/historico">Histórico</Link>
              <Link to="/humor">Humor</Link>
              <Link to="/autoayuda">Autoayuda</Link>
            </div>
          </div>

          {/* Enlace a la página de Favoritos */}
          <Link to="/favoritos">Favoritos</Link>

          {/* Barra de búsqueda */}
          <input type="text" className="search-bar" placeholder="Buscar..." />

          {/* Enlace a la página de Perfil */}
          <Link to="/perfil">Perfil</Link>
        </div>
      </div>
      
      {/* Contenido principal de la página */}
      <div className="content">
        <h2>Bienvenido a la página principal</h2>
        {/* Aquí puedes agregar más contenido o componentes */}
      </div>
    </div>
  );
};

export default Home;

