import React from 'react';
import styles from '../styles/Favoritos.module.css'; // Importando los estilos como un módulo

const Favoritos = () => {
  const favoriteBooks = [
    { id: 1, title: 'El Señor de los Anillos', img: 'link-to-image.jpg' },
    { id: 2, title: '1984', img: 'link-to-image.jpg' },
    { id: 3, title: 'Cien Años de Soledad', img: 'link-to-image.jpg' },
  ];

  return (
    <div className={styles.favoritesContainer}>
      <h1 className={styles.title}>Mis Libros Favoritos</h1>
      {favoriteBooks.length === 0 ? (
        <p className={styles.noFavoritesMessage}>
          ¡Aún no tienes favoritos! Explora y añade tus libros favoritos aquí.
        </p>
      ) : (
        <div className={styles.booksContainer}>
          {favoriteBooks.map((book) => (
            <div key={book.id} className={styles.bookCard}>
              <img src={book.img} alt={book.title} className={styles.bookImage} />
              <div className={styles.bookInfo}>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <button className={styles.removeBtn}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;
