import { useState } from "react";
import {Button, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import './style.css';
import UserForm from "./userForm";

const Login = ()=> {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [showForm, setShowForm] = useState(false);


    const loginHandler = (event) => {
        event.preventDefault();
        try {
            const requestBody = {email: email, password: password}
            //fetch(`https://api-rest-batarseshija.azurewebsites.net/login`, {
            fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            })
                .then(response => {
                    if (!response.ok) {
                    alert("Usuario o contraseña incorrectos");
                    } else {

                        navigate("/productList", {replace: true});
                    }
                });
        } catch (err) {
            console.log(err);
        }
    }

    const createHandler = (event) => {
        try {
                //fetch("https://api-rest-batarseshija.azurewebsites.net/register", {
                fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(event),
            })
                .then(response => {
                    if (response.status === 409) {
                        alert("El usuario ya existe");
                    }
                    else if (!response.ok) {
                        alert("Error al crear el usuario");
                    }
                });
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <Container named="container">
            <Row>
                <Form onSubmit={loginHandler}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="mb2"> EMAIL: </Form.Label>
                        <Form.Control type="text" placeholder="Escribe tu email" value={email} onChange={(txt) => setEmail(txt.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label className="mb2">Password:</Form.Label>
                        <Form.Control type="password" placeholder="Escribe tu contraseña" value={password} onChange={(txt) => setPassword(txt.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Iniciar Sesion
                    </Button>
                </Form>
                <Container className="boton">
                    <Button  variant="primary" onClick={() => setShowForm(!showForm)}>
                        {showForm ? "Cerrar" : "Registrarse"}
                    </Button>
                    {showForm && <UserForm onClickFn={createHandler}></UserForm>}
                </Container>
            </Row>
        </Container>
    )
}

export default Login;