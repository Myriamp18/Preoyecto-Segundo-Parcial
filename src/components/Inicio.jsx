import React,{} from "react";
import "./Inicio.css"
import Menu from "./Menu";
import {useNavigate} from 'react-router-dom';
const Inicio = () => {

    const navigate = useNavigate();

    const direccion = () => {
        // Para redirigir a otra página, usa la función navigate.
        navigate('/Generador');
    }
return(
    <div>
        <Menu/>
 
    <h1>BIENVENIDO</h1>

    <h1>PHOTOIA</h1>

    <h3>Photoia es una aplicacion que pretende gernerar imagenes con solo describir que tipo de imagen quiere que se muestre, nuestro objetivo es que puedas generar una imagen de acuerdo a una idea, como por ejemplo un perro con alas o puede ser cualquier cosas que imagines. </h3>
    
    <h2>EMPEZAR A GENERAR</h2>
   <div className="mm">
    <button className="nn" onClick={direccion}>Generar</button>
    </div>
    
   
</div>
)
}

export default Inicio;
