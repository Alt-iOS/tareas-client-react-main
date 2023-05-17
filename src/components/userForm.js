import React, { useState } from "react";
import { Form, Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './style.css';


const UserForm = ({ onClickFn }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const onEnviar = (event) => {
        event.preventDefault()
        if (name === "" || email === "" || password === ""|| password2 ==="") alert("No puede dejar ningun campo vacio");
        else if (password !== password2) alert("Las contraseñas no coinciden");
        else {
            let data = {
                name: name,
                email: email,
                password: password,
            }
            onClickFn(data);
            alert("Usuario registrado correctamente");
        }
    }

    // Regreso de informcion dinamica al insertar datos
    return (
        <Container named="container">
            <Row>
                <Form onSubmit={onEnviar}>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label className="mb2">NOMBRE:</Form.Label>
                        <Form.Control type="text" placeholder="Escribe tu nombre" value={name} onChange={(txt) => setName(txt.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="mb2">EMAIL:</Form.Label>
                        <Form.Control type="text" placeholder="email@email.com" value={email} onChange={(txt) => setEmail(txt.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="passowrd">
                        <Form.Label className="mb2">CONTRASEÑA:</Form.Label>
                        <Form.Control type="password" placeholder="Escribe tu contraseña" value={password} onChange={(txt) => setPassword(txt.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password2">
                        <Form.Label className="mb2">CONFIRMA CONTRASEÑA:</Form.Label>
                        <Form.Control type="password" placeholder="Comprueba tu contraseña" value={password2} onChange={(txt) => setPassword2(txt.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Registrarse
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}
export default UserForm;