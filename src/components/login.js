import { useEffect, useState } from "react";
import {Button, Container, Form, Row} from "react-bootstrap";
import {render} from "@testing-library/react";
import ProductList from "./productList";

const Login = ()=> {
    const [showForm, setShowForm] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = (data) => {
        try {
            fetch(`https://api-rest-batarseshija.azurewebsites.net/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(dataResponse => {
                }).then(() => {
                    window.location.href = "/productList"
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
            </Row>
        </Container>
    )
}

export default Login;