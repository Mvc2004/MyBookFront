import React from 'react';
import { useNavigate } from 'react-router-dom'; // Necesitas instalar react-router-dom si aún no lo tienes
import '../styles/style.css';
import book2 from '../images/book.image2.jpg'; // Asegúrate de que la imagen esté en la carpeta src.

const Login = () => {
  const navigate = useNavigate();

  // Función que se ejecuta cuando se hace clic en "Iniciar Sesión"
  const handleLogin = () => {
    // Aquí no se hace ninguna validación, solo redirige a una página ficticia
    navigate('/home'); // Cambia '/home' por la ruta a la que quieras redirigir
  };

  return (
    <div className="content">
      <div className="left">
        <img src={book2} alt="Imagen de fondo" />
      </div>
      <div className="right">
        <h1>Iniciar Sesión</h1>
        <div className="input-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" />
        </div>
        <button className="submit-btn" onClick={handleLogin}>Iniciar Sesión</button>
        <div className="link-container">
          <a href="/create-account" className="create-account-link">
            Crear Cuenta
          </a>
          <a href="/forgot-password" className="forgot-password-link">
            Olvidé mi contraseña
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
