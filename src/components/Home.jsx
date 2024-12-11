import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="content">
      <h2 className="book-list-title">Libros para Leer</h2>

      <div className="book-list">
        {/* Primer libro */}
        <div className="book-item">
          <img src="https://example.com/libro1.jpg" alt="Libro 1" className="book-image" />
          <h3>El Hobbit</h3>
          <div className="book-options">
            <a href="/leer/1" className="book-option">Leer</a>
            <a href="/reseña/1" className="book-option">Ver Reseña</a>
            <a href="/favoritos/1" className="book-option">Añadir a Favoritos</a>
          </div>
        </div>

        {/* Segundo libro */}
        <div className="book-item">
          <img src="https://example.com/libro2.jpg" alt="Libro 2" className="book-image" />
          <h3>Cien Años de Soledad</h3>
          <div className="book-options">
            <a href="/leer/2" className="book-option">Leer</a>
            <a href="/reseña/2" className="book-option">Ver Reseña</a>
            <a href="/favoritos/2" className="book-option">Añadir a Favoritos</a>
          </div>
        </div>

        {/* Tercer libro */}
        <div className="book-item">
          <img src="https://example.com/libro3.jpg" alt="Libro 3" className="book-image" />
          <h3>1984</h3>
          <div className="book-options">
            <a href="/leer/3" className="book-option">Leer</a>
            <a href="/reseña/3" className="book-option">Ver Reseña</a>
            <a href="/favoritos/3" className="book-option">Añadir a Favoritos</a>
          </div>
        </div>

        {/* Cuarto libro */}
        <div className="book-item">
          <img src="https://example.com/libro4.jpg" alt="Libro 4" className="book-image" />
          <h3>La Sombra del Viento</h3>
          <div className="book-options">
            <a href="/leer/4" className="book-option">Leer</a>
            <a href="/reseña/4" className="book-option">Ver Reseña</a>
            <a href="/favoritos/4" className="book-option">Añadir a Favoritos</a>
          </div>
        </div>

        {/* Quinto libro */}
        <div className="book-item">
          <img src="https://example.com/libro5.jpg" alt="Libro 5" className="book-image" />
          <h3>El Código Da Vinci</h3>
          <div className="book-options">
            <a href="/leer/5" className="book-option">Leer</a>
            <a href="/reseña/5" className="book-option">Ver Reseña</a>
            <a href="/favoritos/5" className="book-option">Añadir a Favoritos</a>
          </div>
        </div>

        {/* Sexto libro */}
        <div className="book-item">
          <img src="https://example.com/libro6.jpg" alt="Libro 6" className="book-image" />
          <h3>El Alquimista</h3>
          <div className="book-options">
            <a href="/leer/6" className="book-option">Leer</a>
            <a href="/reseña/6" className="book-option">Ver Reseña</a>
            <a href="/favoritos/6" className="book-option">Añadir a Favoritos</a>
          </div>
        </div>

        {/* Séptimo libro */}
        <div className="book-item">
          <img src="https://example.com/libro7.jpg" alt="Libro 7" className="book-image" />
          <h3>La Casa de los Espíritus</h3>
          <div className="book-options">
            <a href="/leer/7" className="book-option">Leer</a>
            <a href="/reseña/7" className="book-option">Ver Reseña</a>
            <a href="/favoritos/7" className="book-option">Añadir a Favoritos</a>
          </div>
        </div>

        {/* Octavo libro */}
        <div className="book-item">
          <img src="https://example.com/libro8.jpg" alt="Libro 8" className="book-image" />
          <h3>Orgullo y Prejuicio</h3>
          <div className="book-options">
            <a href="/leer/8" className="book-option">Leer</a>
            <a href="/reseña/8" className="book-option">Ver Reseña</a>
            <a href="/favoritos/8" className="book-option">Añadir a Favoritos</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;