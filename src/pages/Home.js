
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sidebar from '../Componentes/Sidebar';

const Home = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        alert(`Producto ${product.nombre} agregado al carrito`);
        const updatedCart = [...cart, product];           //Nueva copia del carrito con nuevo producto.
        setCart(updatedCart);             //  Actualiza el estado con el nuevo carrito.
        localStorage.setItem('producto', JSON.stringify(updatedCart));    //Guarda el carrito en el localStorage.
    };

    const productos = [
        {
            nombre: "Lente de Sol",
            precio: 1000,
            descripcion: "Lentes de sol con protección UV.",
            img: "https://imgs.search.brave.com/qAPcqxECoSqJPsrHc2dIViwRQa7SWDn3mpVOYftOejo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbmZp/bml0LmxhL2Nkbi9z/aG9wL2ZpbGVzLzFf/MzdjOTE5NmQtNDRl/Ny00NTIzLWE3MWUt/NjkyMGRjYTRhYjU2/LnBuZz92PTE3MTQ1/MDY3NTgmd2lkdGg9/MTIwMA"
        },
        {
            nombre: "Lente de Sol Premium",
            precio: 1300,
            descripcion: "Lentes de sol con protección UV.",
            img: "https://imgs.search.brave.com/Y3m4TRncDPapWnbb6FdO_Hj3mUVClxpRnL0pNh0tb2U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbmZp/bml0LmxhL2Nkbi9z/aG9wL3Byb2R1Y3Rz/L1gwNkNyeXN0YWwu/cG5nP3Y9MTY2OTEz/ODgyNyZ3aWR0aD0x/MjAw"
        },
        {
            nombre: "Lente de Sol modernos",
            precio: 1500,
            descripcion: "Lentes de sol con protección UV.",
            img: "https://imgs.search.brave.com/xen4mu4o6X2oC9ap-JURr-HZPrU9PPgVhX4lJogrvo0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF85/OTE0NjctTUxBNDYz/NDgzMDMyMDdfMDYy/MDIxLVcud2VicA"
        },
        {
            nombre: "Lente de Sol retro",
            precio: 900,
            descripcion: "Lentes de sol .",
            img: "https://imgs.search.brave.com/HCvemjZqVnIg8FCBHgcmzNJqa_ONZU4KOGsJgCAa4E0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/MzI4MzktTUxBNDcz/ODEzODUyMzJfMDky/MDIxLVcud2VicA"
        },
        {
            nombre: "Lentes ",
            precio: 1200,
            descripcion: "Lentes de sol ",
            img: "https://imgs.search.brave.com/ElEcAM1Gln5aEaUbWCwEC4MeqOigbRztvfYT04W1Yp0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/NTE3MzMtTUxBNTQy/MjAyOTUxNzJfMDMy/MDIzLVcud2VicA"
        },
        {
            nombre: "Lente de Sol ultima edicion",
            precio: 1340,
            descripcion: "Lentes de sol con protección UV.",
            img: "https://imgs.search.brave.com/SAiz_PWlOgrxqWRAXaiyU9wN43pFaAbA8GXNTndBqhc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF83/MTI2MDUtTUxBNzI3/MTgyODMwOTBfMTEy/MDIzLVcud2VicA"
        }


    ];

    return (
        <main className="d-flex">
            <aside className="barraLateral">
                <Sidebar />
            </aside>

            <section className="products">
                {productos.map((producto, index) => (
                    <Card className="product-card" key={index}>
                        <Card.Img variant="top" src={producto.img} alt={producto.nombre} />
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Text className="precio">${producto.precio}</Card.Text>
                            <Card.Text className="description">{producto.descripcion}</Card.Text>
                            <Button className="comprar-btn" onClick={() => addToCart(producto)}>Agregar al carrito</Button>
                        </Card.Body>
                    </Card>
                ))}
            </section>
        </main>
    );
};

export default Home;