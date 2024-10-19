import React from 'react';

const ProductForm = () => {

    const handleSubmit = (event) => {
        //Esto asegura que la función se ejecute cuando el formulario sea enviado, lo uso con el onsubmit del form.
        event.preventDefault(); 
        alert('Formulario enviado con éxito'); 
    };
    return (
        <main className="product-form">
            <section>
                <h1>Alta de Productos</h1>
                <form id="productForm" onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        pattern="^[a-zA-Z\s]{2,50}$"
                        title="El nombre debe tener entre 2 y 50 caracteres y solo contener letras y espacios."
                    />

                    <label htmlFor="precio">Precio:</label>
                    <input
                        type="number"
                        id="precio"
                        name="precio"
                        required
                    />

                    <label htmlFor="stock">Stock:</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        required
                    />

                    <label htmlFor="marca">Marca:</label>
                    <input
                        type="text"
                        id="marca"
                        name="marca"
                        required
                        pattern="^[a-zA-Z\s]{2,50}$"
                        title="La marca debe tener entre 2 y 50 caracteres y solo contener letras y espacios."
                    />

                    <label htmlFor="categoria">Categoría:</label>
                    <input
                        type="text"
                        id="categoria"
                        name="categoria"
                        required
                        pattern="^[a-zA-Z\s]{2,50}$"
                        title="La categoría debe tener entre 2 y 50 caracteres y solo contener letras y espacios."
                    />

                    <label htmlFor="descripcion-corta">Descripción corta:</label>
                    <textarea
                        id="descripcion-corta"
                        name="descripcion-corta"
                        required
                        minLength="10"
                        maxLength="500"
                        title="La descripción corta debe tener entre 10 y 500 caracteres."
                    ></textarea>

                    <label htmlFor="descripcion-larga">Descripción larga:</label>
                    <textarea
                        id="descripcion-larga"
                        name="descripcion-larga"
                        minLength="10"
                        maxLength="500"
                        title="La descripción larga debe tener entre 10 y 500 caracteres."
                    ></textarea>

                    <label htmlFor="envio">Envío sin cargo:</label>
                    <input
                        type="checkbox"
                        id="envio"
                        name="envio"
                    />

                    <label htmlFor="edad-desde">Edad desde:</label>
                    <input
                        type="number"
                        id="edad-desde"
                        name="edad-desde"
                    />

                    <label htmlFor="edad-hasta">Edad hasta:</label>
                    <input
                        type="number"
                        id="edad-hasta"
                        name="edad-hasta"
                    />

                    <label htmlFor="foto">Foto:</label>
                    <input
                        type="file"
                        id="foto"
                        name="foto"
                        required
                    />

                    <button type="submit">Agregar Producto</button>
                </form>
            </section>
        </main>
    );
};

export default ProductForm;
