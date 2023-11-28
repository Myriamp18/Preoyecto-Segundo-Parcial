import React, { useState } from 'react';
import './Login.css';
import {useNavigate} from 'react-router-dom';
import usuario from '../assets/usuario.png'
import password_icon from '../assets/llave.png';

const Login =() => {
   const navigate = useNavigate();
   
   const [nombre, setNombre] = useState("");
   const [pass, setPass] = useState("");


   const handleLogin = async (event) => {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    try {
      const response = await fetch('http://192.168.8.106/Generador/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Content-Type debe ser 'application/json'
        },
        body: JSON.stringify({ nombre: nombre, pass: pass }),
      });

      const data = await response.text();
      console.log('Respuesta del servidor:', data);

      if (data.trim() === "Inicio de sesión exitoso") { // Utiliza trim para eliminar espacios en blanco
        console.log('Inicio de sesión exitoso');
        navigate('/Inicio');
      } else {
        console.log('Inicio de sesión fallido');
        setErrorMessage('El usuario no existe. Verifica tus credenciales.');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud: ', error);
    }
  };

   
    const handleRedireccionRE = () => {
        // Para redirigir a otra página, usa la función navigate.
        navigate('/Registro');
    };

    return (
        
        <div className='container'>
        <div className="header">
        <div className="text">LOGIN</div>
                <div className="underline"></div>
                </div>
      <form onSubmit={handleLogin}>
      <div className="pop">
      <div className="input">
                        <img src={usuario} alt=''/>
                        <input type="usuario"
                         placeholder='Nombre de Usuario '
                         value={nombre} 
                         onChange={(event) => setNombre(event.target.value)}
                         />
                        </div>
        <br />
        <div className="input">
                        <img src={password_icon} alt=''/>
                        <input type="password"
                         placeholder='Contraseña'
                          value={pass} 
                          onChange={(event) => setPass(event.target.value)}
                           />
                    </div>
                    </div>
        <br />
      
        <div className="forgot-password">
            <div className="submit-container">
                <button className="submits" onClick={handleLogin}>Iniciar Sesion</button>
                <button className="submits" onClick={handleRedireccionRE} >Registarse</button>
            </div>
            </div>
         
      </form>

      
     
    </div>
  );
};
 

export default Login;