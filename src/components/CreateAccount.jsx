import React, { useState } from 'react';
import '../styles/style-CA.css';
import book1 from '../images/book.image.jpg';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para guardar la información del usuario
    console.log('Nombre:', name);
    console.log('Correo:', email);
    console.log('Contraseña:', password);
    console.log('Respuesta de seguridad:', securityAnswer);

    // Aquí podrías enviar los datos a un backend o API
    alert('Cuenta creada exitosamente. No olvides tu respuesta de seguridad.');
  };

  return (
    <div className="content">
      <div className="right">
        <img src={book1} alt="Imagen de fondo" />
      </div>
      <div className="left">
        <h1>Crear Cuenta</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              id="name"
              name="nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="securityAnswer">
              ¿Cuál es tu libro favorito? (Pregunta de seguridad)
            </label>
            <input
              type="text"
              id="securityAnswer"
              name="securityAnswer"
              value={securityAnswer}
              onChange={(e) => setSecurityAnswer(e.target.value)}
              required
            />
          </div>
          <div>
            <button className="submit-btn" type="submit">
              Crear Cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;




