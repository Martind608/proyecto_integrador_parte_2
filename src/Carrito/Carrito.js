import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Carrito = () => {

    const [carrito, setCarrito] = useState({});
    const [user, setUser] = useState();

    const navigate = useNavigate();

    useEffect(() => {

        const producto = JSON.parse(localStorage.getItem('producto'));

        if (!producto) {
            alert('No hay productos en el carrito');
            navigate('/ecommerce');
        }
        else {
            setUser(window.sessionStorage.getItem('user'));
            setCarrito(producto);
        }
    },{});

    const eliminarDatos = () => {
        localStorage.removeItem('producto');
        /* localStorage.clear(); borra TODO el localstorage */
        navigate('/ecommerce');
    };

    return (
        <div className="container text-center">
            <h1>Carrito de {user}</h1>
            <div class="card">
                
                    <div class="card-body">
                        <h5 class="card-title">{carrito.nombre}</h5>
                        <p class="card-text">{carrito.descripcion}</p>
                        <p class="card-text">Precio: ${carrito.precio}</p>
                        <button onClick={eliminarDatos} class="btn btn-primary">Comprar</button>
                    </div>
            </div>
        </div>
    );
};


export default Carrito;
