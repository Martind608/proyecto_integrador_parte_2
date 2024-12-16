import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProductForm = () => {
    const { id } = useParams(); // Obtenemos el ID 
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        nombre: '',
        precio: '',
        stock: '',
        marca: '',
        categoria: '',
        descripcionCorta: '',
        descripcionLarga: '',
        envio: false,
        edadDesde: '',
        edadHasta: '',
        foto: '',
    });

    const [loading, setLoading] = useState(true); // Estado carga
    const [error, setError] = useState(null); // Estado errores

    // Carga de datos del producto
    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/productos/${id}`);
                if (!response.ok) throw new Error('No se pudo obtener el producto');
                const data = await response.json();
                setFormData(data); // Precargar los datos del producto
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Error al cargar el producto');
                setLoading(false);
            }
        };

        fetchProducto();
    }, [id]);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/api/productos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Producto actualizado con éxito');
                navigate('/stock'); 
            } else {
                alert('Error al actualizar el producto');
            }
        } catch (err) {
            console.error('Error al actualizar producto:', err);
            alert('Error al conectar con el servidor');
        }
    };

    if (loading) return <p>Cargando datos del producto...</p>;
    if (error) return <p>{error}</p>;

    return (
        <main className="product-form">
            <section>
                <h1>Editar Producto</h1>
                <form id="productForm" onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="precio">Precio:</label>
                    <input
                        type="number"
                        id="precio"
                        name="precio"
                        value={formData.precio}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="stock">Stock:</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="marca">Marca:</label>
                    <input
                        type="text"
                        id="marca"
                        name="marca"
                        value={formData.marca}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="categoria">Categoría:</label>
                    <input
                        type="text"
                        id="categoria"
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="descripcionCorta">Descripción corta:</label>
                    <textarea
                        id="descripcionCorta"
                        name="descripcionCorta"
                        value={formData.descripcionCorta}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <label htmlFor="descripcionLarga">Descripción larga:</label>
                    <textarea
                        id="descripcionLarga"
                        name="descripcionLarga"
                        value={formData.descripcionLarga}
                        onChange={handleChange}
                    ></textarea>

                    <label htmlFor="envio">Envío sin cargo:</label>
                    <input
                        type="checkbox"
                        id="envio"
                        name="envio"
                        checked={formData.envio}
                        onChange={handleChange}
                    />

                    <label htmlFor="edadDesde">Edad desde:</label>
                    <input
                        type="number"
                        id="edadDesde"
                        name="edadDesde"
                        value={formData.edadDesde}
                        onChange={handleChange}
                    />

                    <label htmlFor="edadHasta">Edad hasta:</label>
                    <input
                        type="number"
                        id="edadHasta"
                        name="edadHasta"
                        value={formData.edadHasta}
                        onChange={handleChange}
                    />

                    <label htmlFor="foto">Foto (URL):</label>
                    <input
                        type="url"
                        id="foto"
                        name="foto"
                        value={formData.foto}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Guardar Cambios</button>
                </form>
            </section>
        </main>
    );
};

export default EditProductForm;
