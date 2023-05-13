import React, { useState } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const ProductForm = ({ onClickFn }) => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const onEnviar = (event) => {
        event.preventDefault()
        if (id === "" || name === "" || precio === "" || descripcion === "") alert("No puede dejar ningun campo vacio");
        else {
            let data = {
                id: id,
                name: name,
                precio: precio,
                descripcion: descripcion,
            };
            onClickFn(data);
        }
    }
    // Regreso de informcion dinamica al insertar datos
    return (
        <Container>
            <Row>
                <Col md={6}  >
                    <Form onSubmit={onEnviar}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(txt) => setName(txt.target.value)} />
                            <Form.Text className="text-muted">
                                Share your name with us
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="id">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="number" placeholder="Id" value={id} onChange={(txt) => setId(txt.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="descripcion">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control type="text" placeholder="descripcion" value={descripcion} onChange={(txt) => setDescripcion(txt.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="precio">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" placeholder="precio" value={precio} onChange={(txt) => setPrecio(txt.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductForm;