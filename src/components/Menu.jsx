import React,{useState} from "react";
import "./Menu.css"

import { Link } from "react-router-dom";


const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    return(
        <div>
        <div className="navbar">
            <div className="nav_logo">PHOTOIA</div>
            <div className={`nav_items ${isOpen ? "open" : ""}`}>
               
               <Link to="/Inicio">INICIO</Link>
                              
                <Link to="/Generador">GENERADOR</Link>
                        
                <Link to="/Ayuda">AYUDA</Link>
                <Link to="/">CERRAR SESION</Link>  
                            
                
                
            </div>
            <div className={`nav_toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            </div>


            </div>

            
              

        
    )

    
}

export default Menu;