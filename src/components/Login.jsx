import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Necesitas instalar react-router-dom si aún no lo tienes
import '../styles/Login.css';
import book2 from '../images/book.image.jpg'; // Asegúrate de que la imagen esté en la carpeta src.

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para manejar errores
  const navigate = useNavigate();

  // Función que se ejecuta cuando se hace clic en "Iniciar Sesión"
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/usuarios/');
      
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
  
      const data = await response.json();
      console.log(data); // Verifica la estructura de la respuesta
  
      // Accede al array de usuarios a través de data.body
      const userArray = data.body || []; // Asegúrate de que existe el array
      const user = userArray.find(user => user.email === email && user.contraseña === password);
  
      if (user) {
        navigate('/home'); // Redirigir a la página de inicio
      } else {
        setError('Usuario no creado o contraseña incorrecta.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al intentar iniciar sesión.'); // Manejo de errores
    }
  };

  return (
    <div className="content">
      <div className="left">
        <img src={book2} alt="Imagen de fondo" />
      </div>
      <div className="right">
        <h1>Iniciar Sesión</h1>
        {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error */}
        <div className="input-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Manejar el cambio de input
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Manejar el cambio de input
          />
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