import "./Ayuda.css"
import React,{} from "react";
import Menu from "./Menu";

const   Ayuda  = () => {
return(
    <div>
        <Menu/>
    <div className="ten">
       <div className="a">
      <div className="b">CONTACTANOS</div>
      <div className="c"></div>
      </div>
      <div className="d">
        <input className="axel" placeholder="Cuentanos como podemos ayudarte"/>
        </div>
        <div className="e">
            Si haces clic en siguiente, aceptas que Photoia revise la informacion
            de diagnostico y rendimiento, y los metadatos asociados 
            a tu cuenta para intentar solucionar el problema reportado.
        </div>
        <div className="f">
            <button className="g"> Siguiente</button>
        </div>
    </div>
    </div>

);
}

export default Ayuda; 
