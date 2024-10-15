import logo from '../Logo/logo.png'
import '../App.css'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';



const Navegacion = () => {
    return (
        <>
            <header>
                <div class="logo">
                    <img src={logo} alt="Óptica Tech"/>
                </div>
                <nav>
                    <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/alta">Alta de Productos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
                <SearchBar />
            </header>
        </>
    );
}


export default Navegacion;