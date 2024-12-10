import React, { useState } from 'react';
import '../styles/CreateAccount.css';
import book1 from '../images/book.image2.jpg';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear el objeto con la información del usuario
    const Create = {
      nombre: name,
      email: email,
      r_seguridad: securityAnswer,
      contraseña: password,
    };

    const CreateJson = JSON.stringify(Create);
    console.log(CreateJson);

    // Hacer el fetch a la API
    fetch('http://localhost:4000/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Indica que el cuerpo es JSON
      },
      body: CreateJson,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Cuenta creada exitosamente.headers No olvides tu respuesta de seguridad.');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
          <div className="button-group">
            <button className="submit-btn" type="submit">
              Crear Cuenta
            </button>
            <a href="/" className="login-btn">Volver al inicio</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;