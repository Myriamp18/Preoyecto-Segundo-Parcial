import React, {useState} from 'react'
import './Register.css'
import {useNavigate} from 'react-router-dom'
import email_icon from '../assets/sobre.png'
import password_icon from '../assets/llave.png'
import telefonos from '../assets/telefono.png'
import usuario from '../assets/usuario.png'


const Registro =() => {

   const navigate = useNavigate();

   const handleRegistro = () => {
    // Para redirigir a otra página, usa la función navigate.
    navigate('/');
};
  

    
    

    return (
        <div className='conta'>
        <div className="hear">
        <div className="tex">Registrarse</div>
        <div className="under"></div>
                </div>
       <div className="espacio">
                <div className="recuadro">
                        <img src={usuario} alt=''/>
                        <input type="nombre" placeholder='Nombre'
                        onChange={(event) => setNombre(event.target.value)}/>
                        
                </div>
                <div className="recuadro">
                        <img src={telefonos} alt=''/>
                        <input type="telefono" placeholder='Telefono'
                        />
                </div>
                <div className="recuadro">
                        <img src={email_icon} alt=''/>
                        <input type="electronico" placeholder='Correo Electronico'
                        />
                </div>
                <div className="recuadro">
                        <img src={password_icon} alt=''/>
                        <input type="password" placeholder='Contraseña'
                        />
                        </div>
         </div>  
         <div className="forgot">
            <div className="summ">
    
                <button className="sub" onClick={handleRegistro} >Guardar</button>
            </div>
            </div>   
        </div>
        
        
     
  );
};
 

export default Registro;