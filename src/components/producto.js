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
            <div className="mb1">
            <h5>{`Id: ${producto.id}`}</h5>

                <h5>{producto.name}</h5>
                <h5>{`Descripción: ${producto.description}`}</h5>
                <h5>{`Precio: $${producto.price}`}</h5>
                <h5>{`Código: ${producto._id}`}</h5>

            </div>
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