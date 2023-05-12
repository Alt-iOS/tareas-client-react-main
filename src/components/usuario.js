import React from 'react'
import { Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import TareasUpdateForm from './tareasUpdateForm'

const Usuario = ({ usuario, onDelete, onUpdate }) => {
    const [showForm, setShowForm] = useState(false)

    const clickTarea = () => {
        onDelete(usuario.id)
    }

    // Regreso de informcion dinamica 
    return (
        <div>
            <h5>{usuario.name}</h5>
            <h5>{`Id: ${usuario.id}`}</h5>
            <h5>{`Id: ${usuario._id}`}</h5>
            <h5>{`Nombre: ${usuario.nombre}`}</h5>
            <h5>{`Email: ${usuario.email}`}</h5>
            <h5>{`Password: ${usuario.password}`}</h5>
            <h5>{`Creation Date: ${usuario.fechaCreacion}`}</h5>
            <Button variant="danger" onClick={clickTarea} className="deleteBtn">Delete</Button>
            <Button variant="primary" className="new-btn" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Close" : "Update info"}
            </Button>
            {showForm && <TareasUpdateForm onClickFn={onUpdate} oldTarea={usuario} ></TareasUpdateForm>}
            <hr></hr>
        </div>
    )
}

export default Usuario;