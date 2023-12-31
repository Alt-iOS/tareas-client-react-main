//require("dotenv").config()
import { useEffect, useState } from "react";
import Producto from "./producto";
import ProductForm from "./productForm"
import { Button, Container } from 'react-bootstrap';
import './style.css';



const ProductList = () => {


    const [producto, setProducto] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // Hook para editar varibles de estado
    useEffect(() => {
        //fetch("https://api-rest-batarseshija.azurewebsites.net/products")
        fetch('http://localhost:8080/products')
            .then((res) => res.json())
            .then((data) => setProducto(data.data))
            .catch((err) => console.log(`Error: ${err}`));
    }, []);

    const getProducts = () => {
        // fetch("https://api-rest-batarseshija.azurewebsites.net/products")
        fetch('http://localhost:8080/products')
            .then((res) => res.json())
            .then((data) => setProducto(data.data))
            .then((err) => console.log(`Error: ${err}`));
    }

    const createProduct = (data) => {
        try {
            //fetch("https://api-rest-batarseshija.azurewebsites.net/products",
            fetch('http://localhost:8080/products',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(dataResponse => {
                    setProducto([...producto, dataResponse.data]);
                    setShowForm(false);
                });
        } catch (err) {
            console.log(err);
        }
    }

    const deleteProduct = (data) => {
        try {
            //fetch(`https://api-rest-batarseshija.azurewebsites.net/products/${data}`, {
            fetch(`http://localhost:8080/products/${data}`, {
                method: "DELETE"
            })
                .then(response => response.json())
                .then(dataResponse => {
                    console.log(dataResponse)
                    // setTareas([...tareas, dataResponse.data])
                })
                .then(() => {
                    getProducts()
                })
        } catch (err) {
            console.log(err)
        }
    }

    const updateProduct = (data) => {
        try {
            //fetch(`https://api-rest-batarseshija.azurewebsites.net/products/${data._id}`, {
            fetch(`http://localhost:8080/products/${data._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(dataResponse => {
                    //setProducto(producto.map(producto => producto.id === dataResponse.data.id ? dataResponse.data : producto));
                    setShowForm(false);
                }).then(() => {
                    getProducts()
                });
        } catch (err) {
            console.log(err);
        }
    }

    // Regreso dinamico de informacion
    return (
        <div>
            <h1 className="title">
                    LISTA DE PRODUCTOS
            </h1>
            {producto.map((producto, index) => (
                <Producto
                    key={index}
                    index={index}
                    producto={producto}
                    onDelete={deleteProduct}
                    onUpdate={updateProduct}
                />
            ))}
            <Container className="boton">
                <Button  variant="primary" onClick={() => setShowForm(!showForm)}>
                    {showForm ? "Cerrar" : "Agregar producto"}
                </Button>
                {showForm && <ProductForm onClickFn={createProduct}></ProductForm>}
            </Container>
        </div>
    )
}

export default ProductList;