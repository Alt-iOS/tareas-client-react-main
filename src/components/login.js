import { useState } from "react";
import {Button, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import './style.css';

const Login = ()=> {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = (event) => {
        event.preventDefault();
        try {
            const requestBody = {email: email, password: password}
            fetch(`https://api-rest-batarseshija.azurewebsites.net/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            })
                .then(response=>{
                    if (!response.ok){
                        throw new Error(response.statusMessage || "Backend error");
                    }
                }).then(() => {
                    navigate("/productList", {replace: true});
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