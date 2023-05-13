import React, { useState } from "react";
import { Form, Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const ProductForm = ({ onClickFn }) => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onEnviar = (event) => {
        event.preventDefault()
        if (id === "" || name === "" || description === "" || price === "") alert("No puede dejar ningun campo vacio");
        else {
            let data = {
                id: id,
                name: name,
                price: price,
                description: description,
            };
            onClickFn(data);
        }
    }
    // Regreso de informcion dinamica al insertar datos
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Form onSubmit={onEnviar}>
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(txt) => setName(txt.target.value)} />
                            <Form.Text className="text-muted">
                                Share your name with us
                            </Form.Text>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="id">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="number" placeholder="Id" value={id} onChange={(txt) => setId(txt.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control type="text" placeholder="description" value={description} onChange={(txt) => setDescription(txt.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="number" placeholder="price" value={price} onChange={(txt) => setPrice(txt.target.value)} />
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