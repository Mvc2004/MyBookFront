import React, { useState } from 'react';
import '../styles/CreateAccount.css';
import book1 from '../images/book.image2.jpg';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario
    setErrorMessage(''); // Limpiar el mensaje de error

    try {
      // Verificar si el correo ya existe
      const response = await fetch('http://localhost:4000/api/usuarios/');
      
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
  
      const data = await response.json();
      console.log(data); // Verifica la estructura de la respuesta
  
      // Accede al array de usuarios
      const userArray = data.body || []; // Asegúrate de que existe el array
      const user = userArray.find(user => user.email.toLowerCase() === email.toLowerCase()); 
      console.log(user)// Comparar sin importar mayúsculas/minúsculas
  
      if (user) {
        setErrorMessage('Correo electrónico ya vinculado a una cuenta');
        alert ('Este correo electronico ya se encuentra vinculado a otra cuenta') // Mostrar mensaje de error
      } else {
        // Crear el objeto con la información del usuario
        const Create = {
          nombre: name,
          email: email,
          r_seguridad: securityAnswer,
          contraseña: password,
        };
    
        const CreateJson = JSON.stringify(Create);
        console.log(CreateJson);
    
        // Hacer el fetch a la API para crear la cuenta
        const createResponse = await fetch('http://localhost:4000/api/usuarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Indica que el cuerpo es JSON
          },
          body: CreateJson,
        });

        if (!createResponse.ok) {
          throw new Error('Error al crear la cuenta');
        }

        const createData = await createResponse.json();
        console.log(createData);
        alert('Cuenta creada exitosamente. No olvides tu respuesta de seguridad.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Ocurrió un error. Intenta nuevamente.'); // Manejo de errores
    }
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