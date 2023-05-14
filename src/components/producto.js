import React from 'react'
import { Button } from 'react-bootstrap';
import { useState } from "react";
import ProductUpdateForm from './productUpdateForm';
import './style.css';


const Producto = ({ producto, onDelete, onUpdate }) => {
    const [showForm, setShowForm] = useState(false)

    const clickProduct = () => {
        onDelete(producto._id)
    }

    // Regreso de informcion dinamica 
    return (
        <div>
            <h5 className="mb1">{producto.name}</h5>
            <h5 className="mb1">{`Id: ${producto.id}`}</h5>
            <h5 className="mb1">{`Codigo: ${producto._id}`}</h5>
            <h5 className="mb1">{`Descripcion: ${producto.description}`}</h5>
            <h5 className="mb1">{`Precio: ${producto.price}`}</h5>
            <Button variant="danger" onClick={clickProduct} className="deleteBtn">Delete</Button>
            <Button variant="primary" className="new-btn" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Close" : "Update info"}
            </Button>
            {showForm && <ProductUpdateForm onClickFn={onUpdate} oldProduct={producto} ></ProductUpdateForm>}
            <hr></hr>
        </div>
    )
}

export default Producto;