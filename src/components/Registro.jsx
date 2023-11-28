import React, {useState} from 'react'
import './Register.css'
import {useNavigate} from 'react-router-dom'
import email_icon from '../assets/sobre.png'
import password_icon from '../assets/llave.png'
import telefonos from '../assets/telefono.png'
import usuario from '../assets/usuario.png'


const Registro =() => {

   const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('')

    const handleRegistro = async () => {
        const data = {
          nombre: nombre,
          telefono: telefono,
          correo :  email,
          pass: contraseña
        };
      
        try {
          const response = await fetch('http://192.168.8.106/Generador/registro.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
      
          const responseData = await response.text();
          console.log(responseData); // Mostrar respuesta del servidor
          navigate('/');
        } catch (error) {
          console.error('Error al enviar datos al servidor:', error);
        }
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
                        onChange={(event) => setTelefono(event.target.value)}/>
                </div>
                <div className="recuadro">
                        <img src={email_icon} alt=''/>
                        <input type="electronico" placeholder='Correo Electronico'
                        onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="recuadro">
                        <img src={password_icon} alt=''/>
                        <input type="password" placeholder='Contraseña'
                        onChange={(event) => setContraseña(event.target.value)}/>
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