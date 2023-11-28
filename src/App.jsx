import './index.css';
import Login from './components/Login'
import Ayuda from './components/Ayuda'
import Generador from './components/Generador'
import Inicio from './components/Inicio'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Registro from './components/Registro';


function App() {
  return (
    <div>
     <Router>
      
        <Routes>
          <Route path="/" element={<Login />} /> {/* Ruta de inicio, muestra el componente Login */}
          
          <Route path="/Generador" element={<Generador />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Ayuda" element={<Ayuda/>} />
          
          
        </Routes>
     </Router>
      
    </div>
  );
};

export default App;

