// import Sidebar from './Componentes/Sidebar';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Sidebar from '../Componentes/Sidebar';


const Home = () => {
    const addToCart = (productName) => {
        alert(`Producto ${productName} agregado al carrito`);
        localStorage.setItem('producto', productName);
    };

    return (
        <main className="d-flex">
            <aside className="barraLateral">
                <Sidebar />
            </aside>

            <section className="products">
                <Card className="product-card">
                    <Card.Img variant="top" src="https://imgs.search.brave.com/qAPcqxECoSqJPsrHc2dIViwRQa7SWDn3mpVOYftOejo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbmZp/bml0LmxhL2Nkbi9z/aG9wL2ZpbGVzLzFf/MzdjOTE5NmQtNDRl/Ny00NTIzLWE3MWUt/NjkyMGRjYTRhYjU2/LnBuZz92PTE3MTQ1/MDY3NTgmd2lkdGg9/MTIwMA" alt="Lente de sol" />
                    <Card.Body>
                        <Card.Title>Lente de Sol</Card.Title>
                        <Card.Text className="precio">$1000</Card.Text>
                        <Card.Text className="description">Lentes de sol con protección UV.</Card.Text>
                        <Button className="comprar-btn" onClick={() => addToCart("Lente de Sol")}>Agregar al carrito</Button>
                    </Card.Body>
                </Card>

                <Card className="product-card">
                    <Card.Img variant="top" src="https://imgs.search.brave.com/Y3m4TRncDPapWnbb6FdO_Hj3mUVClxpRnL0pNh0tb2U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbmZp/bml0LmxhL2Nkbi9z/aG9wL3Byb2R1Y3Rz/L1gwNkNyeXN0YWwu/cG5nP3Y9MTY2OTEz/ODgyNyZ3aWR0aD0x/MjAw" alt="Lente de sol" />
                    <Card.Body>
                        <Card.Title>Lente de Sol</Card.Title>
                        <Card.Text className="precio">$1300</Card.Text>
                        <Card.Text className="description">Lentes de sol con protección UV.</Card.Text>
                        <Button className="comprar-btn" onClick={() => addToCart("Lente de Sol")}>Agregar al carrito</Button>
                    </Card.Body>
                </Card>
                <Card className="product-card">
                    <Card.Img variant="top" src="https://imgs.search.brave.com/xen4mu4o6X2oC9ap-JURr-HZPrU9PPgVhX4lJogrvo0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF85/OTE0NjctTUxBNDYz/NDgzMDMyMDdfMDYy/MDIxLVcud2VicA" alt="Lente de sol" />
                    <Card.Body>
                        <Card.Title>Lente de Sol</Card.Title>
                        <Card.Text className="precio">$1500</Card.Text>
                        <Card.Text className="description">Lentes de sol con protección UV.</Card.Text>
                        <Button className="comprar-btn" onClick={() => addToCart("Lente de Sol")}>Agregar al carrito</Button>
                    </Card.Body>
                </Card>
                <Card className="product-card">
                    <Card.Img variant="top" src="https://imgs.search.brave.com/HCvemjZqVnIg8FCBHgcmzNJqa_ONZU4KOGsJgCAa4E0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/MzI4MzktTUxBNDcz/ODEzODUyMzJfMDky/MDIxLVcud2VicA" alt="Lente de sol" />
                    <Card.Body>
                        <Card.Title>Lente de Sol</Card.Title>
                        <Card.Text className="precio">$900</Card.Text>
                        <Card.Text className="description">Lentes de sol con protección UV.</Card.Text>
                        <Button className="comprar-btn" onClick={() => addToCart("Lente de Sol")}>Agregar al carrito</Button>
                    </Card.Body>
                </Card>
                <Card className="product-card">
                    <Card.Img variant="top" src="https://imgs.search.brave.com/ElEcAM1Gln5aEaUbWCwEC4MeqOigbRztvfYT04W1Yp0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/NTE3MzMtTUxBNTQy/MjAyOTUxNzJfMDMy/MDIzLVcud2VicA" alt="Lente de sol" />
                    <Card.Body>
                        <Card.Title>Lente de Sol</Card.Title>
                        <Card.Text className="precio">$1200</Card.Text>
                        <Card.Text className="description">Lentes de sol con protección UV.</Card.Text>
                        <Button className="comprar-btn" onClick={() => addToCart("Lente de Sol")}>Agregar al carrito</Button>
                    </Card.Body>
                </Card>
                <Card className="product-card">
                    <Card.Img variant="top" src="https://imgs.search.brave.com/SAiz_PWlOgrxqWRAXaiyU9wN43pFaAbA8GXNTndBqhc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF83/MTI2MDUtTUxBNzI3/MTgyODMwOTBfMTEy/MDIzLVcud2VicA" alt="Lente de sol" />
                    <Card.Body>
                        <Card.Title>Lente de Sol</Card.Title>
                        <Card.Text className="precio">$1340</Card.Text>
                        <Card.Text className="description">Lentes de sol con protección UV.</Card.Text>
                        <Button className="comprar-btn" onClick={() => addToCart("Lente de Sol")}>Agregar al carrito</Button>
                    </Card.Body>
                </Card>

            </section>
        </main>
    );
};

export default Home;
