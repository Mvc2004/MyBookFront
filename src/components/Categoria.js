import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Categoria.css'; // Estilo para categorías

const Categoria = () => {
  const { categoria } = useParams(); // Recupera el nombre de la categoría de la URL

  // Mapea la categoría a un título y libros específicos
  const categorias = {
    terror: { titulo: "Libros de Terror", libros: ["Drácula", "IT", "El Resplandor"] },
    romance: { titulo: "Libros de Romance", libros: ["Orgullo y Prejuicio", "Romeo y Julieta"] },
    aventura: { titulo: "Libros de Aventura", libros: ["La Isla del Tesoro", "Robinson Crusoe"] },
    "ciencia-ficcion": { titulo: "Ciencia Ficción", libros: ["Dune", "Fundación"] },
    fantasia: { titulo: "Fantasía", libros: ["El Hobbit", "Harry Potter"] },
    misterio: { titulo: "Misterio", libros: ["Sherlock Holmes", "El Código Da Vinci"] },
    suspenso: { titulo: "Suspenso", libros: ["La Chica del Tren", "El Psicoanalista"] },
    drama: { titulo: "Drama", libros: ["Cumbres Borrascosas", "Matar a un Ruiseñor"] },
    historico: { titulo: "Histórico", libros: ["Los Pilares de la Tierra", "Guerra y Paz"] },
    humor: { titulo: "Humor", libros: ["Sin noticias de Gurb", "La Tía Mame"] },
    autoayuda: { titulo: "Autoayuda", libros: ["El Poder del Ahora", "Cómo ganar amigos"] },
  };

  const categoriaInfo = categorias[categoria] || { titulo: "Categoría no encontrada", libros: [] };

  return (
    <div className="categoria-container">
      <h1>{categoriaInfo.titulo}</h1>
      <div className="book-list">
        {categoriaInfo.libros.length > 0 ? (
          categoriaInfo.libros.map((libro, index) => (
            <div className="book-item" key={index}>
              <h3>{libro}</h3>
              <button className="book-option">Añadir a Favoritos</button>
              <button className="book-option">Leer</button>
              <button className="book-option">Ver Reseña</button>
            </div>
          ))
        ) : (
          <p>No hay libros disponibles en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default Categoria;