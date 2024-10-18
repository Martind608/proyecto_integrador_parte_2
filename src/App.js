
import './App.css';
import Navegacion from './Componentes/Navegacion';
import Footer from './Componentes/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Alta from './pages/Alta';         
import Contacto from './pages/Contacto'; 
import Nosotros from './pages/Nosotros';
// import Error from './Error/Error';
import Login from './Login/Login';
function App() {
  return (


    <div className="google">
      <Navegacion />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alta" element={<Alta />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
      
      </Routes>
      <main>
      


      </main>
      <Footer />
    </div>
  );
}

export default App;
