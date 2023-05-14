import React, { useState } from "react";
import { Form, Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './style.css';


const ProductForm = ({ onClickFn }) => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const onEnviar = (event) => {
        event.preventDefault()
        if (id === "" || name === "" || description === "" || price === "") alert("No puede dejar ningun campo vacio");
        else {
            let data = {
                id: id,
                name: name,
                description: description,
                price: price,
            };
            onClickFn(data);
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

                        <Form.Group className="mb-3" controlId="id">
                            <Form.Label className="mb2">ID:</Form.Label>
                            <Form.Control type="number" placeholder="Id" value={id} onChange={(txt) => setId(txt.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label className="mb2">DESCRIPCIÓN:</Form.Label>
                            <Form.Control type="text" placeholder="Describe el producto" value={description} onChange={(txt) => setDescription(txt.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label className="mb2">PRECIO:</Form.Label>
                            <Form.Control type="number" placeholder="Indica el precio sin IVA" value={price} onChange={(txt) => setPrice(txt.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
            </Row>
        </Container>
    )
}
export default ProductForm;