import React, { useState } from 'react';
import '../styles/ForgotPassword.css'; // Asegúrate de que la ruta sea correcta
import forgotImage from '../images/image.mybook3.jpg'; // Ruta de la imagen

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Correo:', email);
    console.log('Respuesta de seguridad:', securityAnswer);
  };

  return (
    <div className="content">
      <div className="left">
        <img src={forgotImage} alt="Recuperar Contraseña" />
      </div>
      <div className="right">
        <h1>Recuperar Contraseña</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="security-question">¿Cuál es el nombre de tu primera mascota?</label>
            <input
              type="text"
              id="security-question"
              value={securityAnswer}
              onChange={(e) => setSecurityAnswer(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Recuperar Contraseña
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

