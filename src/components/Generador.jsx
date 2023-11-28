import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import "./generador.css";
import Menu from "./Menu";


const configuration = new Configuration({
  apiKey:import.meta.env.VITE_MY_API_KEY,
})

const openai = new OpenAIApi(configuration);

function Generador (){
  const [image, setImage] = useState("https://oaidalleapiprodscus.blob.core.windows.net/private/org-N260EqIJbke2j1qUF1PjfSOj/user-O9bB62OFSuuN2rwswcD9eFVN/img-QosmguSUHXk45gYzr2NpgX8a.png?st=2023-11-17T23%3A09%3A33Z&se=2023-11-18T01%3A09%3A33Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-11-17T19%3A57%3A40Z&ske=2023-11-18T19%3A57%3A40Z&sks=b&skv=2021-08-06&sig=4og/8IsC6wUwrbOXSd9GDeZJWFUgY5cqMaTdcKPsKFI%3D");

  const [isLoading, setIsLoading] = useState(false);
  const [promt, setPromt] = useState("")
  async function fetchData(){
    try{
      setIsLoading(true);
      const response = await openai.createImage({
        prompt: promt,
        n: 1,
        size: "256x256",

      });
      setImage(response.data.data[0].url);
      setIsLoading(false);
} catch (error) {
  setIsLoading(false);
    if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
    } else {
        console.log(error.message);
    }
}
  }
  return(
  <div>
    <Menu/>
    <div className='generador'>
    <div className="subtitulo">
      <div className="nombre">Generador de Imagenes</div>
      <div className="linea"></div>
      </div>
      <div className="descripcion">
        <input onChange={(e) => setPromt(e.target.value)} placeholder="Descripcion de Imagen"/>
      </div>
      <div className="foto">
        {isLoading ? (
          <> 
          <p>Cargando....</p> 
          <p>Por favor espera hasta que tu imagen este lista</p> 
          </> 
        ): (
      <img src={image}/>
      )}
      </div>
      <div className="clic">
      <button className="non" onClick={fetchData}>Generar</button>
      </div>
    </div>
    </div>
  );

}

export default Generador;