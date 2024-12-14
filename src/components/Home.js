import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Para los estilos CSS
import '../images/logo.jpg'; // Para el logo
import book4 from '../images/book_image4.jpg';
import book5 from '../images/book_image5.jpg';
import book6 from '../images/book_image6.jpg';
import book7 from '../images/book_image7.jpg';
import book8 from '../images/book_image8.jpg';
import book9 from '../images/book_image9.jpg';
import book10 from '../images/book_image10.jpg';




const Home = () => {
  return (
    <div>
      {/* Barra de navegación */}
      <div className="navbar">
        <div className="logo">
          <img src="images/logo.jpg"  alt="Logo" />
        </div>
        <div className="navbar-items">
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

          <Link to="/favoritos">Favoritos</Link>
          <input type="text" className="search-bar" placeholder="Buscar..." />
          <Link to="/perfil">Perfil</Link>
        </div>
      </div>

      {/* Contenedor de la lista de libros */}
      <div className="book-list-container">
        <h2 className="book-list-title">Libros para Leer</h2>
        <div className="book-list">
          {/* Tarjetas de libros */}
          <div className="book-item">
            <img src={book4} alt="libro 1" className="book-image" />
            <h3>Los Siete Maridos De Evelyn</h3>
            <div className="book-options">
              <Link to="/read-book1" className="book-option">Leer</Link>
              <Link to="/review-book1" className="book-option">Ver Reseña</Link>
              <button className="book-option">Añadir a Favoritos</button>
            </div>
          </div>
          <div className="book-item">
            <img src={book5} alt="Libro 2" className="book-image" />
            <h3>rojo blanco y sangre azul</h3>
            <div className="book-options">
              <Link to="/read-book2" className="book-option">Leer</Link>
              <Link to="/review-book2" className="book-option">Ver Reseña</Link>
              <button className="book-option">Añadir a Favoritos</button>
            </div>
          </div>
          <div className="book-item">
            <img src={book6} alt="Libro 3" className="book-image" />
            <h3> heartstopper
            </h3>
            <div className="book-options">
              <Link to="/read-book3" className="book-option">Leer</Link>
              <Link to="/review-book3" className="book-option">Ver Reseña</Link>
              <button className="book-option">Añadir a Favoritos</button>
            </div>
          </div>
          <div className="book-item">
            <img src={book7} alt="Libro 4" className="book-image" />
            <h3>bajo la misma estrella</h3>
            <div className="book-options">
              <Link to="/read-book4" className="book-option">Leer</Link>
              <Link to="/review-book4" className="book-option">Ver Reseña</Link>
              <button className="book-option">Añadir a Favoritos</button>
            </div>
          </div>
          <div className="book-item">
            <img src={book8} alt="Libro 5" className="book-image" />
            <h3>orgullo y prejuicio</h3>
            <div className="book-options">
              <Link to="/read-book3" className="book-option">Leer</Link>
              <Link to="/review-book3" className="book-option">Ver Reseña</Link>
              <button className="book-option">Añadir a Favoritos</button>
            </div>
          </div>
          <div className="book-item">
            <img src= {book9} alt="Libro 6" className="book-image" />
            <h3>la magia del silecio</h3>
            <div className="book-options">
              <Link to="/read-book6" className="book-option">Leer</Link>
              <Link to="/review-book6" className="book-option">Ver Reseña</Link>
              <button className="book-option">Añadir a Favoritos</button>
            </div>
          </div>
          <div className="book-item">
            <img src={book10} alt="Libro 7" className="book-image" />
            <h3>vivir adrede</h3>
            <div className="book-options">
              <Link to="/read-book7" className="book-option">Leer</Link>
              <Link to="/review-book7" className="book-option">Ver Reseña</Link>
              <button className="book-option">Añadir a Favoritos</button>
            </div>
          </div>
          {/* Agrega más libros aquí */}
        </div>
      </div>
    </div>
  );
};

export default Home; 
