import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Para los estilos

const Home = () => {
  return (
    <div>
      {/* Barra de navegación */}
      <div className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="navbar-items">
          {/* Menú desplegable para Categorías */}
          <div className="dropdown">
            <button className="dropbtn">Categorías</button>
            <div className="dropdown-content">
              <Link to="/category1">Categoría 1</Link>
              <Link to="/category2">Categoría 2</Link>
              <Link to="/category3">Categoría 3</Link>
              <Link to="/category4">Categoría 4</Link>
            </div>
          </div>

          <Link to="/favorites">Favoritos</Link>
          <input type="text" className="search-bar" placeholder="Buscar..." />
          <Link to="/profile">Perfil</Link>
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
