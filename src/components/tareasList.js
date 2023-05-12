//require("dotenv").config()
import { useEffect, useState } from "react";
import Usuario from "./usuario";
import TareasForm from "./tareasForm"
import { Button } from 'react-bootstrap';


const TareasList = () => {


    const [usuario, setUsuario] = useState([]);
    const [showForm, setShowForm] = useState(false);

    // Hook para editar varibles de estado
    useEffect(() => {
        fetch("https://api-restusuarios-perezlopez.azurewebsites.net/users")
            .then((res) => res.json())
            .then((data) => setUsuario(data.data))
            .catch((err) => console.log(`Error: ${err}`));
    }, []);

    const getTareas = () => {
        fetch("https://api-restusuarios-perezlopez.azurewebsites.net/users")
            .then((res) => res.json())
            .then((data) => setUsuario(data.data))
            .then((err) => console.log(`Error: ${err}`));
    }

    const createTarea = (data) => {
        try {
            fetch("https://api-restusuarios-perezlopez.azurewebsites.net/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(dataResponse => {
                    setUsuario([...usuario, dataResponse.data]);
                    setShowForm(false);
                });
        } catch (err) {
            console.log(err);
        }
    }

    const deleteTarea = (data) => {
        try {
            fetch(`https://api-restusuarios-perezlopez.azurewebsites.net/users${data}`, {
                method: "DELETE"
            })
                .then(response => response.json())
                .then(dataResponse => {
                    console.log(dataResponse)
                    // setTareas([...tareas, dataResponse.data])
                })
                .then(() => {
                    getTareas()
                })
        } catch (err) {
            console.log(err)
        }
    }

    const updateTarea = (data) => {
        try {
            fetch(`https://api-restusuarios-perezlopez.azurewebsites.net/users${data._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(dataResponse => {
                    //setTareas(tareas.map(tarea => tarea.id === dataResponse.data.id ? dataResponse.data : tarea));
                    setShowForm(false);
                }).then(() => {
                    getTareas()
                });
        } catch (err) {
            console.log(err);
        }
    }

    // Regreso dinamico de informacion
    return (
        <div>
            {usuario.map((usuario, index) => (
                <Usuario
                    key={index}
                    index={index}
                    usuario={usuario}
                    onDelete={deleteTarea}
                    onUpdate={updateTarea}
                />
            ))}
            <br></br>
            <Button variant="primary" onClick={() => setShowForm(!showForm)}>
                {showForm ? "Close" : "Create Homework"}
            </Button>
            {showForm && <TareasForm onClickFn={createTarea}></TareasForm>}
            <br></br>
        </div>
    )
}

export default TareasList;