import React, { useState } from 'react';
import './Login.css';
import {useNavigate} from 'react-router-dom';
import usuario from '../assets/usuario.png'
import password_icon from '../assets/llave.png';

const Login =() => {
   const navigate = useNavigate();
   
   const handleLogin = () => {
    navigate('/Inicio');
   }
   

   
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
                         
                         />
                        </div>
        <br />
        <div className="input">
                        <img src={password_icon} alt=''/>
                        <input type="password"
                         placeholder='Contraseña'
                         
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